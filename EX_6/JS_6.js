let listBook=[];
while (true) {
    let choice = prompt(`---QUẢN LÝ SÁCH---\n1. Thêm sách mới.\n2. Hiển thị danh sách sách.\n3. Tìm kiếm sách theo tên.\n4. Xóa sách theo ID.\n5. Thoát chương trình.\n Nhập lựa chọn của bạn:`);
    switch (choice) {
        case '1':{
           let bookID = prompt("Mời nhập ID:");
           let name = prompt("Mời nhập tên sách:");
           let writer = prompt("Mời nhập tên tác giả:");
           let year = prompt("Mời nhập năm xuất bản:");
            listBook.push({bookID, name, writer, year} );
            break;
        }
        case '2': {
            console.log(listBook);
            break;
        }
        case '3': {
            let seachBook= prompt("Nhập từ khóa tìm kiếm");
             let book = listBook.find(item => item.name.toLowerCase().includes(seachBook.toLowerCase()));
             //.toLowerCase() => chuyển chuỗi về chữ thường
             //.inclides() => tìm một phần tên, không cần khớp 100%
            if (book){
                console.log(book);
            } else {
                alert ("Sách không tìm thấy! Mời nhập lại.");
            }
            break;
        }
        case '4': {
            let delBook = prompt('Mời nhập ID sách cần xóa:');
            let delID =listBook.findIndex(item => item.bookID == delBook);
            if (delID !== -1) {
                listBook.splice( delID, 1);
            } else {
                alert ("Sách không tồn tại! Mời nhập lại.");
            }
            break;
        }
         case '5':
            break;
        default:
            alert("Lựa chọn không hợp lệ. Mời nhập lại.");
    }
    if (choice === '5') break;
        }
    