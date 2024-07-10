// const teacher = {
//     firstName : "Minh",
//     lastName : "Thao",
//     getFullName(){
//        console.log(`${this.firstName} ${this.lastName}`);
//     }  
//  }
//  const bt = document.querySelector('button');
//  bt.onclick = teacher.getFullName.bind(teacher);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    const cars = ['BMW']
    const root = $('ul');
    const input = $('input');
    
    const bt = $('button');
    return {
        add(car) {
                cars.push(car);
        },
        delete(index){
            cars.splice(index,1);
        },
        render() {
            const html = cars.map((car,index) => `<li>${car}
            <span class = "delete" data-index = "${index}">x</span>
            </li>`).join('');
            root.innerHTML = html;
        },
        handleDelete(e){
            const deleteBtn = e.target.closest('.delete');
            if (deleteBtn){
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
        }
        ,
        init(){
            
            bt.onclick = () => {

               this.add(input.value);
               this.render();
               // vì arrow function không có context nên lấy this là phạm vi ở ngoài nó
               input.value = null
               input.focus();
            }
            this.render();
            root.onclick= this.handleDelete.bind(this);
            
        }
    }
})()

app.init();

//delegate pattern