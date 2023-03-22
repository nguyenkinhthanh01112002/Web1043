//khởi tạo biến result để lưu kết quả là nội dung hiển thị của thẻ có chưa id = "result"
var result = document.getElementById("result");
//hàm getResult sẽ cộng dồn các giá trị của các nút bấm khi người dùng thao tác
function getResult(num) {
    result.value += num;
}
//xoá các thao tác của người dùng trên máy tính và hiển thị màn hình trống
function clearResult() {
    result.value = "";
}
//hàm thực hiện các giá trị đã được cộng dồn của hàm getResult
//hàm eval sẽ thực hiện biểu thức do người dùng nhập vào thông qua hàm getResult
function calculate() {
    result.value = eval(result.value);
}