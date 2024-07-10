this.firstName = "Minh"
this.lastName = "Thu"

const teacher = {
   firstName : "Minh",
   lastName : "Thao",
   getFullName(){
       return `${this.firstName} ${this.lastName}`
   }  
}
// case 1: 
console.log(teacher.getFullName()); // Minh Thao
   /*gia thich cho case 1
    nguyên nhân ra Minh Thảo vì thuộc tính this đang lấy teacher làm thuộc tính trước nó
    nên lúc này this là teacher */
//case 2 
const getTeacherName = teacher.getFullName();
console.log(getTeacherName) // Minh Thao
  /* giải thic cho case 2
  Nguyên nhân ra Minh Thảo vì ở thời điểm hàm getFullName được gọi
  thí lúc này context của phương thức this này vẫn là teacher
  và đã được trả về giá trị ngay lập tức nên this vẫn là teacher */
//case 3
const getTeacherName3= teacher.getFullName;
console.log(getTeacherName3()); // Minh Thu

  /* giải thích cho case 3
  Nguyên nhân ra Minh Thu vì ở thời điểm khai báo getTeacherName3 được khai báo 
  thì chúng ta đang khai báo biến getTeacherName3 này cho 1 hàm
  chứ không gọi hàm và thực hiện hàm đó
  nên khi sử dụng console.log(getTeacherName3())
  thì chúng ta đang gọi hàm không thông qua một đôi tượng nên lúc này this sẽ chỏ ra đối tượng global */