<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h5 class="card-title mb-0">Danh Sách Khuyến Mãi</h5>
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
                                    <th>Mã Code</th>
                                    <th>Tên</th>
                                    <th>Kiểu</th>
                                    <th>Giá Trị</th>
                                    <th>Thời Gian Bắt Đầu</th>
                                    <th>Thời Gian Kết Thúc</th>
                                    <th>Đơn Tối Thiểu</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="listKhuyenMai.length">
                                    <tr v-for="(item, index) in listKhuyenMai" :key="item.id" class="text-center">
                                        <td>{{ index + 1 }}</td>
                                        <td class="text-start">{{ item.ma_code }}</td>
                                        <td class="text-start">{{ item.ten }}</td>
                                        <td>
                                            <span v-if="item.kieu == 1" class="badge bg-info text-nowrap">Phần trăm
                                                (%)
                                            </span>
                                            <span v-else class="badge bg-secondary text-nowrap">Số tiền cố định
                                                (đ)</span>
                                        </td>
                                        <td>{{ item.gia_tri }} {{ item.kieu == 1 ? '%' : 'đ' }}</td>
                                        <td class="small">{{ item.tu_ngay }}</td>
                                        <td class="small">{{ item.den_ngay }}</td>
                                        <td>{{ item.dieu_kien_toi_thieu }}</td>
                                        <td>
                                            <button v-on:click="changeStatus(item)" v-if="item.trang_thai == 1"
                                                class="btn btn-success btn-sm w-100 shadow-sm">Đang áp dụng</button>
                                            <button v-on:click="changeStatus(item)" v-else
                                                class="btn btn-secondary btn-sm w-100 shadow-sm">Tạm ngưng</button>
                                        </td>
                                        <td class="text-nowrap">
                                            <button type="button" class="btn btn-warning btn-sm me-1 shadow-sm"
                                                data-bs-toggle="modal" data-bs-target="#editModal"
                                                v-on:click="Object.assign(edit_khuyen_mai, item)">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm shadow-sm"
                                                data-bs-toggle="modal" data-bs-target="#deleteModal"
                                                v-on:click="Object.assign(xoa_khuyen_mai, item)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                                <tr v-else class="text-center">
                                    <td colspan="9">Không có dữ liệu khuyến mãi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Add Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">Thêm Mới Khuyến Mãi</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Khuyến Mãi</label>
                                <input v-model="them_khuyen_mai.ma_code" type="text" class="form-control shadow-sm"
                                    placeholder="Nhập mã khuyến mãi">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Tên Khuyến Mãi</label>
                                <input v-model="them_khuyen_mai.ten" type="text" class="form-control shadow-sm"
                                    placeholder="Nhập tên khuyến mãi">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Kiểu Khuyến Mãi</label>
                                <select v-model="them_khuyen_mai.kieu" class="form-select shadow-sm">
                                    <option disabled value="">Chọn kiểu</option>
                                    <option value="1">Phần trăm (%)</option>
                                    <option value="0">Số tiền cố định (đ)</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Giá Trị</label>
                                <input v-model="them_khuyen_mai.gia_tri" type="number" class="form-control shadow-sm"
                                    placeholder="Nhập giá trị">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Từ Ngày</label>
                                <input v-model="them_khuyen_mai.tu_ngay" type="date" class="form-control shadow-sm">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Đến Ngày</label>
                                <input v-model="them_khuyen_mai.den_ngay" type="date" class="form-control shadow-sm">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Điều Kiện Tối Thiểu</label>
                                <input v-model="them_khuyen_mai.dieu_kien_toi_thieu" type="number"
                                    class="form-control shadow-sm" placeholder="Nhập điều kiện tối thiểu">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select v-model="them_khuyen_mai.trang_thai" class="form-select shadow-sm">
                                    <option value="1">Đang áp dụng</option>
                                    <option value="0">Tạm ngưng</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary px-4 shadow-sm" @click="themKhuyenMai">Lưu Khuyến
                        Mãi</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title">Cập Nhật Khuyến Mãi</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã Khuyến Mãi</label>
                                <input v-model="edit_khuyen_mai.ma_code" type="text" class="form-control shadow-sm"
                                    placeholder="Nhập mã khuyến mãi">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Tên Khuyến Mãi</label>
                                <input v-model="edit_khuyen_mai.ten" type="text" class="form-control shadow-sm"
                                    placeholder="Nhập tên khuyến mãi">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Kiểu Khuyến Mãi</label>
                                <select v-model="edit_khuyen_mai.kieu" class="form-select shadow-sm">
                                    <option value="1">Phần trăm (%)</option>
                                    <option value="0">Số tiền cố định (đ)</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Giá Trị</label>
                                <input v-model="edit_khuyen_mai.gia_tri" type="number" class="form-control shadow-sm"
                                    placeholder="Nhập giá trị">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Từ Ngày</label>
                                <input v-model="edit_khuyen_mai.tu_ngay" type="date" class="form-control shadow-sm">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Đến Ngày</label>
                                <input v-model="edit_khuyen_mai.den_ngay" type="date" class="form-control shadow-sm">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Điều Kiện Tối Thiểu</label>
                                <input v-model="edit_khuyen_mai.dieu_kien_toi_thieu" type="number"
                                    class="form-control shadow-sm" placeholder="Nhập điều kiện tối thiểu">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select v-model="edit_khuyen_mai.trang_thai" class="form-select shadow-sm">
                                    <option value="1">Đang áp dụng</option>
                                    <option value="0">Tạm ngưng</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-warning shadow-sm px-4" @click="editKhuyenMai">Lưu Thay
                        Đổi</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Khuyến Mãi</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa khuyến mãi này?</h5>
                    <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger px-4 shadow-sm" @click="xoaKhuyenMai">Xác Nhận
                        Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'KhuyenMaiManager',
    data() {
        return {
            listKhuyenMai: [],
            them_khuyen_mai: {
                ma_code: '',
                ten: '',
                kieu: '',
                gia_tri: '',
                tu_ngay: '',
                den_ngay: '',
                dieu_kien_toi_thieu: '',
                trang_thai: '1',
            },
            edit_khuyen_mai: {},
            xoa_khuyen_mai: {},
            change_Status: {},
        };
    },
    created() {
        this.getKhuyenMai();
    },
    methods: {
        getKhuyenMai() {
            axios
                .get('http://127.0.0.1:8000/api/admin/khuyen-mai')
                .then(response => {
                    this.listKhuyenMai = response.data.data;
                })
                .catch(error => {
                    console.error('Lỗi khi tải danh sách Khuyến Mãi:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi tải danh sách Khuyến Mãi.');
                });
        },
        themKhuyenMai() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khuyen-mai/create', this.them_khuyen_mai)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKhuyenMai();
                        this.them_khuyen_mai = {
                            ma_code: '',
                            ten: '',
                            kieu: 'Phần trăm',
                            gia_tri: '',
                            tu_ngay: '',
                            den_ngay: '',
                            dieu_kien_toi_thieu: '',
                            trang_thai: '1',
                        };
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#addModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thêm mới Khuyến Mãi:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi thêm mới Khuyến Mãi.');
                    }
                });
        },

        editKhuyenMai() {
            axios
                .put('http://127.0.0.1:8000/api/admin/khuyen-mai/update', this.edit_khuyen_mai)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKhuyenMai();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#editModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi cập nhật Khuyến Mãi:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi cập nhật Khuyến Mãi.');
                    }
                });
        },
        xoaKhuyenMai() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/khuyen-mai/delete/' + this.xoa_khuyen_mai.id)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKhuyenMai();
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#deleteModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi xóa Khuyến Mãi:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi xóa Khuyến Mãi.');
                });
        },
        changeStatus(item) {
            const new_trang_thai = item.trang_thai == 1 ? 0 : 1;
            axios
                .patch('http://127.0.0.1:8000/api/admin/khuyen-mai/change-status', {
                    id: item.id,
                    trang_thai: new_trang_thai
                })
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKhuyenMai();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thay đổi trạng thái Khuyến Mãi:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi thay đổi trạng thái Khuyến Mãi.');
                    }
                });
        }
    },
};
</script>

<style scoped></style>
