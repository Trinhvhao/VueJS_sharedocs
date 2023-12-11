<template>
  <div style="overflow: auto" class="container">
    <div class="header"><h1>Quá trình thực hiện Project<i class="fa-solid fa-arrow-right"></i></h1></div>
    <n-timeline horizontal>
      <n-timeline-item
        title="Start"
        content="Xây dựng project Vuejs"
        time="2023-11-21"
      />
      <n-timeline-item
        title="Learning"
        type="warning"
        content="Học thêm các kiến thức về Vuejs và cách hoạt động"
        time="2023-11-25"
      />
      <n-timeline-item
        type="error"
        content="Gặp cản trở tâm lí do chưa nắm bắt được rõ cách hoạt động của project"
        title="Năng lực chưa đủ"
        time="2023-11-28"
      />
      <n-timeline-item
        type="warning"
        title="Learning"
        content="Cần cù thì bù siêng năng, não bộ bắt đầu tiếp thu kiến thức"
        time="2023-11-30"
      />
      <n-timeline-item
        type="error"
        title="Gặp lỗi khi làm project đầu tiên"
        content="Cài các dependencies gây không tương thích với dự án"
        time="2023-12-1"
      />
      <n-timeline-item
        type="error"
        title="Rút kinh nghiệm"
        content="Ngã ở đâu thì mình đứng lên ở chỗ khác --> Tạo project khác và làm lại từ đầu"
        time="2023-12-1 "
      />
      <n-timeline-item
        type="success"
        title="Khởi đầu mới tốt"
        content="Xây dựng được component đầu tiên"
        time="2023-12-1"
      />
      <n-timeline-item
        type="warning"
        title="Learning "
        content="Học cách sử dụng MockAPI và Axios"
        time="2023-12-2"
      />
      <n-timeline-item
        type="success"
        title="Liên kết MockAPi"
        content="Liên kết thành công MockAPI"
        time="2023-12-2"
      />
      <n-timeline-item
        type="success"
        title="Tạo thêm các Component"
        content="Xây dựng các component và install thư viện "
        time="2023-12-3"
      />
      <n-timeline-item
        type="warning"
        title="Bí ý tưởng"
        content="Không biết nên làm gì tiếp theo"
        time="2023-12-3"
      />
      <n-timeline-item
        type="warning"
        title="Nhận ra rằng..."
        content="Nước sắp ngập đến mặt rồi--> tiếp tục"
        time="2023-12-3"
      />
      <n-timeline-item
        type="error"
        title="Deadline môn CTDLGT"
        content="Tạm thời dừng"
        time="2023-12-4"
      />
      <n-timeline-item
        type="success"
        title="Liên tục phát triển xây dựng Web"
        content="Ngày code 10 tiếng"
        time="2023-12-5 -> 2023-12-9 "
      />
      <n-timeline-item
        type="success"
        title="Hoàn thiện Word"
        content="Code và làm word 12h/day"
        time="2023-12-10"
      />
      <n-timeline-item
        type="error"
        title="Lỗi mất dữ liệu mockapi"
        content="Mất dữ liệu mockapi quan trọng và phải tạo lại"
        time="2023-12-10"
      />
      <n-timeline-item
        type="success"
        title="Upload code project lên github"
        content="Bảo vệ mã nguồn trong sạch trước khi bảo vệ"
        time="2023-12-11"
      />
      <n-timeline-item
        type="warning"
        title="Bảo vệ BTL"
        content="Hi vọng được điểm tốt"
        time="2023-12-12"
      />
    </n-timeline>
  </div>
</template>
<style scoped>
.header {
  color: #0cada0ad;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}
h1{
    transition: all 0.3s ease;
}
.container{
  margin: 48px auto;
}
.header h1:hover{
  color: black;
}
</style>