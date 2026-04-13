<template>
  <div class="row">
    <div class="col-lg-7">
      <div
        class="card border-top border-0 border-4 border-primary shadow-sm mt-2"
      >
        <div class="card-header">
          <h5 class="card-title mb-0">Thông tin hóa đơn</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-hover">
              <thead class="text-center">
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Giảm giá</th>
                  <th>VAT</th>
                  <th>Thành tiền</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list_chi_tiet" :key="index">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td>{{ item.ten_san_pham }}</td>
                  <td class="text-center">
                    <input
                      type="text"
                      class="form-control form-control-sm text-center"
                      v-model="item.so_luong"
                    />
                  </td>
                  <td class="text-end">
                    <input
                      type="text"
                      class="form-control form-control-sm text-end"
                      :value="item.gia_ban_mac_dinh"
                      disabled
                    />
                  </td>
                  <td class="text-end">
                    <input
                      type="text"
                      class="form-control form-control-sm text-end"
                      v-model="item.giam_gia"
                    />
                  </td>
                  <td class="text-end">
                    <input
                      type="text"
                      class="form-control form-control-sm text-end"
                      :value="item.thue_vat"
                      disabled
                    />
                  </td>
                  <td class="text-end">
                    {{
                      (
                        item.so_luong * item.gia_ban_mac_dinh -
                        item.giam_gia
                      ).toLocaleString("vi-VN")
                    }}
                  </td>
                  <td class="text-center">
                    <button
                      class="btn btn-sm btn-danger"
                      @click="xoaSanPham(index)"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Nhập thông tin khách hàng"
                        v-model="so_dien_thoai"
                      />
                      <button class="btn btn-sm btn-primary" @click="timKiem()">
                        Tìm kiếm
                      </button>
                    </div>
                  </td>
                  <td>{{ khach_hang ? khach_hang.ho_ten : '' }}</td>

                  <td colspan="3" class="text-end">
                    <strong>Tổng cộng:</strong>
                  </td>
                  <td class="text-end" colspan="2">
                    <strong>
                      {{
                        list_chi_tiet
                          .reduce(
                            (total, item) =>
                              total +
                              (item.so_luong * item.gia_ban_mac_dinh -
                                (item.giam_gia || 0)) *
                                (1 + (item.thue_vat || 0) / 100),
                            0,
                          )
                          .toLocaleString("vi-VN")
                      }}
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5">
      <div
        class="card border-top border-0 border-4 border-primary shadow-sm mt-2"
      >
        <div class="card-header">
          <h5 class="card-title mb-0">Danh sách sản phẩm</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Nhập tên sản phẩm..."
              />
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-hover table-bordered table-striped">
              <thead class="text-center">
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Đơn vị tính</th>
                  <th scope="col">Giá bán</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, index) in list_san_pham" :key="index">
                  <td class="text-center">{{ index + 1 }}</td>
                  <td>{{ value.ten_san_pham }}</td>
                  <td>{{ value.don_vi_tinh }}</td>
                  <td class="text-end">
                    {{ value.gia_ban_mac_dinh }}
                  </td>
                  <td class="text-center">
                    <button
                      class="btn btn-sm btn-primary"
                      @click="addCart(value)"
                    >
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list_san_pham: [],
      list_chi_tiet: [],
      tu_khoa: "",
      khach_hang: null,
      so_dien_thoai: "",
    };
  },

  mounted() {
    this.getSanPham();
  },

  methods: {
    getSanPham() {
      axios
        .get("http://127.0.0.1:8000/api/admin/san-pham")
        .then((response) => {
          this.list_san_pham = response.data.data;
          this.$toast.success(
            `<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0"></p></div>`,
          );
        })
        .catch((error) => {
          if (error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            const items = Object.values(errors)
              .flat()
              .map((msg) => `<li>${msg}</li>`)
              .join("");
            const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
            this.$toast.error(messages);
          } else {
            this.$toast.error("Đã xảy ra lỗi khi lấy danh sách sản phẩm.");
          }
        });
    },
    timKiem() {
      axios
        .post("http://127.0.0.1:8000/api/admin/khach-hang/tim-kiem", {
          so_dien_thoai: this.so_dien_thoai,
        })
        .then((response) => {
          if (response.data.status) {
            this.khach_hang = response.data.data;
            this.$toast.success(
              `<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0"></p></div>`,
            );
          } else {
            this.$toast.error(response.data.message || "Không tìm thấy Khách Hàng nào.");
            this.khach_hang = null;

          }
        })
        .catch((error) => {
          if (error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            const items = Object.values(errors)
              .flat()
              .map((msg) => `<li>${msg}</li>`)
              .join("");
            const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
            this.$toast.error(messages);
          } else {
            this.$toast.error("Đã xảy ra lỗi khi tìm kiếm Khách Hàng.");
          }
        });
    },
    addCart(sanPham) {
      let item = this.list_chi_tiet.find((item) => item.id === sanPham.id);
      if (item) {
        item.so_luong += 1;
      } else {
        sanPham.giam_gia || (sanPham.giam_gia = 0);
        sanPham.so_luong = 1;
        this.list_chi_tiet.push(sanPham);
      }
    },
    xoaSanPham(index) {
      this.list_chi_tiet.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
