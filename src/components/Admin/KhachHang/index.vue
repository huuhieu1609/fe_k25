<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h5 class="card-title mb-0">Danh Sách Khách Hàng</h5>
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
                                    <th>Họ Tên</th>
                                    <th>Số Điện Thoại</th>
                                    <th>Email</th>
                                    <th>Địa Chỉ</th>
                                    <th>Điểm Tích Lũy</th>
                                    <th>Ghi Chú</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="listKhachHang.length">
                                    <tr v-for="(item, index) in listKhachHang" :key="item.id" class="text-center">
                                        <td>{{ index + 1 }}</td>
                                        <td class="text-start">{{ item.ho_ten }}</td>
                                        <td>{{ item.so_dien_thoai }}</td>
                                        <td>{{ item.email }}</td>
                                        <td class="text-start">{{ item.dia_chi }}</td>
                                        <td>{{ item.diem_tich_luy }}</td>
                                        <td class="text-start">{{ item.ghi_chu }}</td>
                                        <td>
                                            <button v-on:click="changeStatus(item)" v-if="item.trang_thai == 1"
                                                class="btn btn-success btn-sm w-100 shadow-sm">Hoạt động</button>
                                            <button v-on:click="changeStatus(item)" v-else
                                                class="btn btn-secondary btn-sm w-100 shadow-sm">Vô hiệu</button>
                                        </td>
                                        <td class="text-nowrap">
                                            <button type="button" class="btn btn-warning btn-sm me-1 shadow-sm"
                                                data-bs-toggle="modal" data-bs-target="#editModal"
                                                v-on:click="Object.assign(edit_khach_hang, item)">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm shadow-sm"
                                                data-bs-toggle="modal" data-bs-target="#deleteModal"
                                                v-on:click="Object.assign(xoa_khach_hang, item)">
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
    </div>

    <!-- Add Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title text-center">Thêm Mới Khách Hàng</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Họ Tên</label>
                                <input v-model="them_khach_hang.ho_ten" type="text" class="form-control shadow-sm"
                                    placeholder="Nhập họ tên">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Số Điện Thoại</label>
                                <input v-model="them_khach_hang.so_dien_thoai" type="text"
                                    class="form-control shadow-sm" placeholder="Nhập số điện thoại">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Email</label>
                                <input v-model="them_khach_hang.email" type="email" class="form-control shadow-sm"
                                    placeholder="Nhập email">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Địa Chỉ</label>
                                <input v-model="them_khach_hang.dia_chi" type="text" class="form-control shadow-sm"
                                    placeholder="Nhập địa chỉ">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label fw-bold">Ghi Chú</label>
                                <textarea v-model="them_khach_hang.ghi_chu" class="form-control shadow-sm" rows="3"
                                    placeholder="Nhập ghi chú"></textarea>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select v-model="them_khach_hang.trang_thai" class="form-select shadow-sm">
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Vô hiệu</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Điểm Tích Lũy</label>
                                <input v-model="them_khach_hang.diem_tich_luy" type="number"
                                    class="form-control shadow-sm" placeholder="Nhập điểm tích lũy">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary px-4 shadow-sm" @click="themKhachHang">Lưu Khách
                        Hàng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title">Cập Nhật Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Họ Tên</label>
                                <input v-model="edit_khach_hang.ho_ten" type="text" class="form-control shadow-sm"
                                    placeholder="Nhập họ tên">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Số Điện Thoại</label>
                                <input v-model="edit_khach_hang.so_dien_thoai" type="text"
                                    class="form-control shadow-sm" placeholder="Nhập số điện thoại">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Email</label>
                                <input v-model="edit_khach_hang.email" type="email" class="form-control shadow-sm"
                                    placeholder="Nhập email">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Địa Chỉ</label>
                                <input v-model="edit_khach_hang.dia_chi" type="text" class="form-control shadow-sm"
                                    placeholder="Nhập địa chỉ">
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label fw-bold">Ghi Chú</label>
                                <textarea v-model="edit_khach_hang.ghi_chu" class="form-control shadow-sm" rows="3"
                                    placeholder="Nhập ghi chú"></textarea>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select v-model="edit_khach_hang.trang_thai" class="form-select shadow-sm">
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Vô hiệu</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Điểm Tích Lũy</label>
                                <input v-model="edit_khach_hang.diem_tich_luy" type="number"
                                    class="form-control shadow-sm" placeholder="Nhập điểm tích lũy">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-warning shadow-sm px-4" @click="editKhachHang">Lưu Thay
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
                    <h5 class="modal-title text-white">Xóa Khách Hàng</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa khách hàng này?</h5>
                    <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger px-4 shadow-sm" @click="xoaKhachHang">Xác Nhận
                        Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'KhachHangManager',
    data() {
        return {
            listKhachHang: [],
            them_khach_hang: {
                ho_ten: '',
                so_dien_thoai: '',
                email: '',
                dia_chi: '',
                trang_thai: '1',
                ghi_chu: '',
            },
            edit_khach_hang: {},
            xoa_khach_hang: {},
        };
    },
    created() {
        this.getKhachHang();
    },
    methods: {
        getKhachHang() {
            axios
                .get('http://127.0.0.1:8000/api/admin/khach-hang')
                .then(response => {
                    this.listKhachHang = response.data.data || [];
                })
                .catch(error => {
                    console.error('Lỗi khi tải danh sách Khách Hàng:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi tải danh sách Khách Hàng.');
                });
        },
        themKhachHang() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/create', this.them_khach_hang)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKhachHang();
                        this.them_khach_hang = {
                            ho_ten: '',
                            so_dien_thoai: '',
                            email: '',
                            dia_chi: '',
                            trang_thai: '1',
                            ghi_chu: '',
                        };
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#addModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thêm mới Khách Hàng:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi thêm mới Khách Hàng.');
                    }
                });
        },

        editKhachHang() {
            axios
                .put('http://127.0.0.1:8000/api/admin/khach-hang/update', this.edit_khach_hang)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKhachHang();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#editModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi cập nhật Khách Hàng:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi cập nhật Khách Hàng.');
                    }
                });
        },
        xoaKhachHang() {
            axios
                .delete(`http://127.0.0.1:8000/api/admin/khach-hang/delete/${this.xoa_khach_hang.id}`)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKhachHang();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#deleteModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi xóa Khách Hàng:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi xóa Khách Hàng.');
                });
        },
        changeStatus(item) {
            const new_trang_thai = item.trang_thai == 1 ? 0 : 1;
            axios
                .delete('http://127.0.0.1:8000/api/admin/khach-hang/change-status', {
                    data: {
                        id: item.id,
                        trang_thai: new_trang_thai
                    }
                })
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKhachHang();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thay đổi trạng thái Khách Hàng:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi thay đổi trạng thái Khách Hàng.');
                    }
                });
        },
    },
};
</script>

<style scoped></style>