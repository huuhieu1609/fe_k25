<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h5 class="card-title mb-0">Danh Sách Sản Phẩm</h5>
                        </div>
                        <div class="col-lg-6 text-end">
                            <button class="btn btn-primary px-4 shadow-sm" data-bs-toggle="modal"
                                data-bs-target="#addModal">
                                <i class="fa fa-plus me-1"></i>Thêm Mới
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Hình Ảnh</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Loại Sản Phẩm</th>
                                    <th>Mô Tả</th>
                                    <th>Đơn Vị Tính</th>
                                    <th>Quản Lý Lô</th>
                                    <th>Quản Lý Serial</th>
                                    <th>Thuế VAT (%)</th>
                                    <th>Giá Nhập (Đ)</th>
                                    <th>Giá Bán (Đ)</th>
                                    <th>Tồn Tối Thiểu</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in list_san_pham" :key="index">
                                    <tr class="text-center">
                                        <td>{{ index + 1 }}</td>
                                        <td>
                                            <img :src="value.hinh_anh" alt="Nho Mẫu Đơn"
                                                class="img-fluid rounded shadow-sm"
                                                style="width: 60px; height: 60px; object-fit: cover;">
                                        </td>
                                        <td class="text-start fw-bold">{{ value.ten_san_pham }}</td>
                                        <td>{{ value.ten }}</td>
                                        <td class="text-start small">{{ value.mo_ta }}</td>
                                        <td>{{ value.don_vi_tinh }}</td>
                                        <td class="text-center text-success fw-bold">{{ value.quan_ly_lo }}</td>
                                        <td class="text-center text-secondary">{{ value.quan_ly_serial }}</td>

                                        <td>{{ value.thue_vat }}%</td>
                                        <td class="text-end fw-bold">{{ formatCurrency(value.gia_nhap_mac_dinh) }}
                                        </td>
                                        <td class="text-end fw-bold text-danger">{{
                                            formatCurrency(value.gia_ban_mac_dinh) }} </td>
                                        <td>{{ value.ton_toi_thieu }}</td>
                                        <td>
                                            <button v-on:click="changeStatus(value)" v-if="value.trang_thai == 1"
                                                class="btn btn-success btn-sm w-100 shadow-sm">Còn Kinh Doanh</button>
                                            <button v-on:click="changeStatus(value)" v-else
                                                class="btn btn-danger btn-sm w-100 shadow-sm">Ngừng Kinh
                                                Doanh</button>
                                        </td>
                                        <td class="text-nowrap">
                                            <button @click="Object.assign(edit_san_pham, value)"
                                                class="btn btn-warning btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button @click="Object.assign(delete_san_pham, value)"
                                                class="btn btn-danger btn-sm shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </template>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Modal -->
        <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">Thêm Mới Sản Phẩm</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Tên Sản Phẩm</label>
                                    <input v-model="them_san_pham.ten_san_pham" type="text"
                                        class="form-control shadow-sm" placeholder="Nhập tên sản phẩm">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Hình Ảnh (URL)</label>
                                    <input v-model="them_san_pham.hinh_anh" type="text" class="form-control shadow-sm"
                                        placeholder="Nhập URL hình ảnh">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Đơn Vị Tính</label>
                                    <input v-model="them_san_pham.don_vi_tinh" type="text"
                                        class="form-control shadow-sm" placeholder="Ví dụ: Cái, Hộp, KG">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Quản Lý Lô</label>
                                    <select v-model="them_san_pham.quan_ly_lo" class="form-select shadow-sm">
                                        <option value="1">Có</option>
                                        <option value="0" selected>Không</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Quản Lý Serial</label>
                                    <select v-model="them_san_pham.quan_ly_serial" class="form-select shadow-sm">
                                        <option value="1">Có</option>
                                        <option value="0" selected>Không</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Thuế VAT (%)</label>
                                    <input v-model="them_san_pham.thue_vat" type="number"
                                        class="form-control shadow-sm">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giá Nhập Mặc Định</label>
                                    <input v-model="them_san_pham.gia_nhap_mac_dinh" type="number"
                                        class="form-control shadow-sm" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giá Bán Mặc Định</label>
                                    <input v-model="them_san_pham.gia_ban_mac_dinh" type="number"
                                        class="form-control shadow-sm" placeholder="0">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Tồn Tối Thiểu</label>
                                    <input v-model="them_san_pham.ton_toi_thieu" type="number"
                                        class="form-control shadow-sm">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Trạng Thái</label>
                                    <select v-model="them_san_pham.trang_thai" class="form-select shadow-sm">
                                        <option value="1" selected>Còn Kinh Doanh</option>
                                        <option value="0">Ngừng Kinh Doanh</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Loại Sản Phẩm</label>
                                    <select v-model="them_san_pham.id_loai_san_pham" class="form-select shadow-sm">
                                        <option value="">Chọn loại sản phẩm...</option>
                                        <option v-for="loai in list_loai_san_pham" :key="loai.id" :value="loai.id">{{
                                            loai.ten }}</option>
                                    </select>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label fw-bold">Mô Tả Sản Phẩm</label>
                                    <textarea v-model="them_san_pham.mo_ta" class="form-control shadow-sm" rows="3"
                                        placeholder="Nhập mô tả sản phẩm..."></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer text-end">
                        <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                        <button @click="addSanPham()" type="button" class="btn btn-primary px-4 shadow-sm"
                            data-bs-dismiss="modal">Thêm Sản
                            Phẩm</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header bg-info text-white">
                        <h5 class="modal-title">Cập Nhật Sản Phẩm</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Tên Sản Phẩm</label>
                                    <input type="text" class="form-control shadow-sm"
                                        v-model="edit_san_pham.ten_san_pham">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Hình Ảnh (URL)</label>
                                    <input type="text" class="form-control shadow-sm" v-model="edit_san_pham.hinh_anh">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Đơn Vị Tính</label>
                                    <input type="text" class="form-control shadow-sm"
                                        v-model="edit_san_pham.don_vi_tinh">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Quản Lý Lô</label>
                                    <select class="form-select shadow-sm" v-model="edit_san_pham.quan_ly_lo">
                                        <option value="1" selected>Có</option>
                                        <option value="0">Không</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label class="form-label fw-bold">Quản Lý Serial</label>
                                    <select class="form-select shadow-sm" v-model="edit_san_pham.quan_ly_serial">
                                        <option value="1">Có</option>
                                        <option value="0" selected>Không</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Thuế VAT (%)</label>
                                    <input type="number" class="form-control shadow-sm"
                                        v-model="edit_san_pham.thue_vat">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giá Nhập Mặc Định</label>
                                    <input type="number" class="form-control shadow-sm"
                                        v-model="edit_san_pham.gia_nhap_mac_dinh">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Giá Bán Mặc Định</label>
                                    <input type="number" class="form-control shadow-sm"
                                        v-model="edit_san_pham.gia_ban_mac_dinh">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label class="form-label fw-bold">Tồn Tối Thiểu</label>
                                    <input type="number" class="form-control shadow-sm"
                                        v-model="edit_san_pham.ton_toi_thieu">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Trạng Thái</label>
                                    <select class="form-select shadow-sm" v-model="edit_san_pham.trang_thai">
                                        <option value="1" selected>Còn Kinh Doanh</option>
                                        <option value="0">Ngừng Kinh Doanh</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label fw-bold">Loại Sản Phẩm</label>
                                    <select class="form-select shadow-sm" v-model="edit_san_pham.id_loai_san_pham">
                                        <option v-for="loai in list_loai_san_pham" :key="loai.id" :value="loai.id">{{
                                            loai.ten
                                        }}</option>
                                    </select>
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label class="form-label fw-bold">Mô Tả Sản Phẩm</label>
                                    <textarea class="form-control shadow-sm" rows="3"
                                        v-model="edit_san_pham.mo_ta"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer text-end">
                        <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                        <button @click="updateSanPham()" type="button" data-bs-dismiss="modal"
                            class="btn btn-info text-white px-4 shadow-sm">Cập Nhật Sản Phẩm</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title text-white">Xóa Sản Phẩm</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center py-4">
                        <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                        <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa sản phẩm này?</h5>
                        <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-secondary px-4 shadow-sm"
                            data-bs-dismiss="modal">Hủy</button>
                        <button @click="deleteSanPham()" type="button" data-bs-dismiss="modal"
                            class="btn btn-danger px-4 shadow-sm">Xác Nhận Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SanPhamManager',
    data() {
        return {
            list_loai_san_pham: [],
            list_san_pham: [],
            them_san_pham: {
                ten_san_pham: '',
                hinh_anh: '',
                don_vi_tinh: '',
                quan_ly_lo: 0,
                quan_ly_serial: 0,
                thue_vat: 10,
                gia_nhap_mac_dinh: 0,
                gia_ban_mac_dinh: 0,
                ton_toi_thieu: 10,
                trang_thai: 1,
                id_loai_san_pham: '',
                mo_ta: '',
            },
            edit_san_pham: {
                ten_san_pham: '',
                hinh_anh: '',
                don_vi_tinh: '',
                quan_ly_lo: 0,
                quan_ly_serial: 0,
                thue_vat: 10,
                gia_nhap_mac_dinh: 0,
                gia_ban_mac_dinh: 0,
                ton_toi_thieu: 10,
                trang_thai: 1,
                id_loai_san_pham: '',
                mo_ta: '',
            },
            delete_san_pham: {
                ten_san_pham: '',
                hinh_anh: '',
                don_vi_tinh: '',
                quan_ly_lo: 0,
                quan_ly_serial: 0,
                thue_vat: 10,
                gia_nhap_mac_dinh: 0,
                gia_ban_mac_dinh: 0,
                ton_toi_thieu: 10,
                trang_thai: 1,
                id_loai_san_pham: '',
                mo_ta: '',
            }
        }
    },
    created() {
        this.getLoaiSanPham();
        this.getSanPham();
    },
    methods: {
        getLoaiSanPham() {
            axios
                .get('http://127.0.0.1:8000/api/admin/loai-san-pham')
                .then(response => {
                    this.list_loai_san_pham = response.data.data || [];

                })
                .catch(error => {
                    console.error('Lỗi khi tải danh sách Loại Sản Phẩm:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi tải danh sách Loại Sản Phẩm.');
                });
        },
        getSanPham() {
            axios
                .get('http://127.0.0.1:8000/api/admin/san-pham')
                .then(response => {
                    this.list_san_pham = response.data.data || [];

                })
                .catch(error => {
                    console.error('Lỗi khi tải danh sách Sản Phẩm:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi tải danh sách Sản Phẩm.');
                });
        },
        addSanPham() {
            // Gọi API để thêm mới Ca Làm Việc
            axios
                .post('http://127.0.0.1:8000/api/admin/san-pham/create', this.them_san_pham)
                .then(response => {
                    this.$toast.success(response.data.message);
                    this.getSanPham();
                })
                .catch(error => {
                    console.error('Lỗi khi thêm mới Ca Làm Việc:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi thêm mới Ca Làm Việc.');
                    }
                });
        },
        updateSanPham() {
            // Gọi API để cập nhật Ca Làm Việc
            axios
                .put('http://127.0.0.1:8000/api/admin/san-pham/update', this.edit_san_pham)
                .then(response => {
                    this.$toast.success(response.data.message);
                    this.getSanPham();
                })
                .catch(error => {
                    console.error('Lỗi khi cập nhật Ca Làm Việc:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi cập nhật Ca Làm Việc.');
                    }
                });
        },
        deleteSanPham() {
            // Gọi API để xóa Ca Làm Việc
            axios
                .delete('http://127.0.0.1:8000/api/admin/san-pham/delete/' + this.delete_san_pham.id)
                .then(response => {
                    this.$toast.success(response.data.message);
                    this.getSanPham();
                })
                .catch(error => {
                    console.error('Lỗi khi xóa Ca Làm Việc:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi xóa Ca Làm Việc.');
                    }
                });
        },
        changeStatus(item) {
            const new_trang_thai = item.trang_thai == 1 ? 0 : 1;
            axios
                .patch('http://127.0.0.1:8000/api/admin/san-pham/change-status', {
                    id: item.id,
                    trang_thai: new_trang_thai
                })
                .then(response => {
                    if (response.data.status == 1) {
                        this.getSanPham();
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thay đổi trạng thái Sản Phẩm:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi thay đổi trạng thái Sản Phẩm.');
                    }
                });
        },
        // Source - https://stackoverflow.com/a/64980253
        // Posted by MinIsNghia
        // Retrieved 2026-04-09, License - CC BY-SA 4.0
        formatCurrency(value) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        }
    }
}
</script>

<style scoped></style>
