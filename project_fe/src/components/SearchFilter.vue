<template>
  <div class="card-container">
    <input
      class="search"
      type="text"
      v-model="searchQuery"
      placeholder="Enter your search query"
    />
    <div v-if="filteredItems.length > 0" class="grid-container">
    <div class="row">
      <div v-for="item in paginatedItems" :key="item.id" class="card p-4 col-xl-4 col-md-4 col-12">
        <!-- Content of each card -->
        <div class="card-body">
          <div class="card-img">
            <img :src="item.imagelink" :alt="item.alt" />
          </div>
          <div class="card-actions">
            <button id="card-botton1">
              <strong
                ><a
                  class="card-link p-2"
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                  <i class="fa-solid fa-eye"></i> </a
              ></strong>
            </button>
            <button class="card-button2" @click="downloadItem(item.link)">
              Download
              <i class="fa-solid fa-download"></i>
            </button>
          </div>
          <a class="card-link" :href="item.categoryLink">
            <div class="card-content">{{ item.category }}</div>
          </a>
          <a class="card-link" :href="item.link">
            <div class="card-header">{{ item.title }}</div>
            <div class="card-title">{{ item.description }}</div>
          </a>
        </div>
      </div>
    </div>
    </div>
    <div v-else class="no-results-message">No matching items found.</div>
    <div class="pagination">
      <NPagination
        v-if="totalPages > 1"
        v-model="currentPage"
        :page-count="totalPages"
        @update:page="handlePageChange"
      />
    </div>
  </div>
</template>

<script>

// Import các thư viện và thành phần cần thiết
// 'axios' dùng để thực hiện các yêu cầu http
import axios from "axios";
import PaginationVue from "./Pagination.vue";
import { NPagination } from "naive-ui";
export default {
  components: {
    PaginationVue,
    NPagination,
  },
  methods: {
    // Phương thức này nhận một trang mới làm tham số và gán trang hiện tại làm trang mới
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },
  },
  // Hàm 'data' trả về một đối tượng chứa các thuộc tính dữ liệu khởi tạo cho component
  data() {
    return {
      searchQuery: "",
      items: [],
      currentPage: 1, // Trang hiện tại
      itemsPerPage: 12, // Số lượng mục trên mỗi trang
    };
  },
  setup() {
    return {
      page: ref(2),
    };
  },
  // Hook mounted được sử dụng để thực hiện một yêu cầu HTTP để lấy dữ liệu từ một API giả mạo khi component được tạo ra.
  //  Dữ liệu được nhận từ yêu cầu sẽ được gán cho thuộc tính items.
  mounted() {
    // Replace the URL with your Mock API endpoint
    const apiUrl = "https://65661495eb8bb4b70ef2e149.mockapi.io/files";
    axios
      .get(apiUrl)
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  computed: {
    // filteredItems được sử dụng để lọc các mục trong mảng items dựa trên điều kiện tìm kiếm được nhập vào
    // Lời gọi phương thức 'filter' trên mảng 'items'.
    // Phương thức filter sẽ tạo ra một mảng mới chứa các phần tử của mảng gốc mà thoản mãn điều kiện được xác định bởi hàm callback
    filteredItems() {
      return this.items.filter((item) => {
        return (
    // Kiểm tra xem 'searchQuery' có xuất hiện trong 'title, description' của mỗi phần tử 'item' không == chuyển cả 'searchQuery' và 'title' về dạng chữ thường để so sánh
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      });
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredItems.slice(startIndex, endIndex);
    },
    // totalPages: Tính toán tổng số trang dựa trên filteredItems và số lượng mục trên mỗi trang.
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
.card-container {
  max-width: 1200px;
  margin: 24px auto;
  align-items: center;
  text-align: center;
}
.pagination{
  margin: auto;
  display: flex;
  justify-content: center;
}
.search {
  padding: 10px;
  border: 1px solid #000000; /* Màu trắng cho viền thanh tìm kiếm */
  background-color: #fdfdfd; /* Màu đen cho nền thanh tìm kiếm */
  color: #847878; /* Màu trắng cho chữ trong thanh tìm kiếm */
  border-radius: 20px;
  width: 50%;
  margin-bottom: 20px;
}

.search:focus {
  outline: none;
  color: rgb(30, 31, 31);
  border-color: #3498db;
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.7);
}
.search:hover {
  transform: scale(1.1);
  transition: all 0.2s ease-in-out;
}
.card {
  border: none;
}

.card-body {
  padding: 0;
}
.card-title {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
}
.card-img {
  overflow: hidden;
  height: 162px;
  padding-bottom: 12px;
}
.card-button2 {
  background-color: #a4e3ce;
  margin-left: 5px;
  color: white;
  border-radius: 10px;
  border: 2px solid #3498db;
  transition: all 0.2s ease-in;
}
.card-button2:hover {
  background-color: rgb(62, 144, 220);
  scale: 1.05;
}
.card-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
#card-botton1 {
  margin-right: 5px;
  border-radius: 9px;
  background: #c2d5d4;
  border: none;
  font-family: inherit;
  text-align: center;
  transition: 0.4s;
}
#card-botton1:hover {
  box-shadow: 7px 5px 56px -14px #00d9d2;
}
#card-botton1:active {
  transform: scale(0.97);
  box-shadow: 7px 5px 56px -10px #c3d900;
}
a {
  text-decoration: none;
}

.card-header {
  color: rgb(36, 136, 207);
  font-weight: bold;
  padding: 0;
}

.card-title {
  color: rgb(0 0 0 / 60%);
  font-size: 1rem;
}

.card-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgb(138, 40, 45);
  padding-bottom: 6px;
  text-transform: uppercase;
  padding-top: 8px;
}
.card:hover {
  transform: scale(1.05); /* Phóng to thẻ khi di chuột vào */
  transition: all 0.3s ease-in-out;
  background-color: azure;
}
</style>
