let students = [];
while (true) {
    let choice = prompt("Mời lựa chọn:\n1. Thêm sinh viên mới.\n2. Hiển thị danh sách sinh viên.\n3. Xóa sinh viên theo ID.\n4. THOÁT");
    if (choice === null)
         break;
    switch (choice) {
        case '1': {
            let stuID = prompt("Mời nhập mã số (ID): ");
            let name = prompt("Mời nhập họ và tên:");
            let age = prompt("Mời nhập tuổi:");
            if (!stuID || !name || isNaN(age)) {
                alert("Dữ liệu không hợp lệ, vui lòng nhập lại.");}
            students.push({ stuID, name, age });
            break;
        }
        case '2':
            console.log(students);
            break;
        case '3': {
            let delID = prompt("Mời nhập mã số (ID) cần xóa:");
            let index = students.findIndex(item => item.stuID === delID);
            if (index !== -1) {
                students.splice(index, 1);
            } else {
                console.log(`LỖI!!! ID ${delID} không tồn tại.`)
            }
            break;
        }
        case '4':
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }

    if (choice === '4') break;
}
