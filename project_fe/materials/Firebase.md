## Hiển thị đường dẫn của tài liệu sau khi tải lên firebase
Để hiển thị đường dẫn của link đến tài liệu sau khi tải lên thành công lên Firebase, bạn có thể thực hiện các bước sau:

Thay Đổi Dữ Liệu Trong Component:

Sau khi tệp tin được tải lên thành công, Firebase trả về một snapshot của tệp tin đã được tải lên.
Trong hàm .then((snapshots) => {..., bạn có thể trích xuất đường dẫn URL của tệp tin từ snapshot.metadata.fullPath hoặc snapshot.ref.fullPath.
Gán đường dẫn URL cho một thuộc tính trong component Vue.js, chẳng hạn this.uploadedFileURLs = this.uploadedFileURLs.concat(uploadedURL);.
Hiển Thị Đường Dẫn Trong Template:

Thêm một mảng hoặc danh sách mới trong data() để lưu trữ đường dẫn URL của các tệp tin.
Hiển thị đường dẫn URL trong template Vue.js, tương tự như bạn hiển thị tên tệp tin.

## Error: uploadBytes(...).on is not a function ( Khi cố tạo progress bar)
Lỗi "uploadBytes(...).on is not a function" xuất hiện vì uploadBytes không hỗ trợ phương thức on trực tiếp. 
Thay vào đó, bạn cần sử dụng uploadBytesResumable để có thể lắng nghe sự kiện state_changed. Dưới đây là cách bạn có thể sửa đổi mã của mình: