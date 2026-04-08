<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Thêm Mới Chức Năng</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Chức Năng</label>
                            <input v-model="them_chuc_nang.ten_chuc_nang" type="text" class="form-control"
                                placeholder="Nhập tên chức năng...">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">URL Chức Năng</label>
                            <input v-model="them_chuc_nang.url_chuc_nang" type="text" class="form-control"
                                placeholder="Nhập URL chức năng...">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Method Chức Năng</label>
                            <input v-model="them_chuc_nang.method_chuc_nang" type="text" class="form-control"
                                placeholder="Nhập method chức năng...">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô Tả</label>
                            <textarea v-model="them_chuc_nang.mo_ta_chuc_nang" class="form-control" rows="3"
                                placeholder="Nhập mô tả chức năng..."></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình trạng</label>
                            <select v-model="them_chuc_nang.tinh_trang" class="form-select">
                                <option value="#">Chọn tình trạng</option>
                                <option value="1">Đang hoạt động</option>
                                <option value="0">Ngừng hoạt động</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themChucNang()" class="btn btn-primary px-4 shadow-sm">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Danh Sách Chức Năng</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Chức Năng</th>
                                    <th>URL Chức Năng</th>
                                    <th>Method Chức Năng</th>
                                    <th>Mô Tả</th>
                                    <th>Tình trạng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in listChucNang" :key="index">
                                    <tr class="text-center">
                                        <td>{{ index + 1 }}</td>
                                        <td class="text-start">{{ value.ten_chuc_nang }}</td>
                                        <td class="text-start">{{ value.url_chuc_nang }}</td>
                                        <td class="text-start">{{ value.method_chuc_nang }}</td>
                                        <td class="text-start">{{ value.mo_ta_chuc_nang }}</td>
                                        <td>
                                            <button v-on:click="changeStatus(value)" v-if="value.tinh_trang == 1"
                                                class="btn btn-success btn-sm w-100 shadow-sm">Đang hoạt động</button>
                                            <button v-on:click="changeStatus(value)" v-else
                                                class="btn btn-secondary btn-sm w-100 shadow-sm">Ngừng hoạt động</button>
                                        </td>
                                        <td class="text-nowrap">
                                            <button v-on:click="Object.assign(edit_chuc_nang, value)"
                                                class="btn btn-warning btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button v-on:click="Object.assign(xoa_chuc_nang, value)"
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
    </div>

    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Chức Năng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Chức Năng</label>
                            <input v-model="edit_chuc_nang.ten_chuc_nang" type="text" class="form-control"
                                placeholder="Nhập tên chức năng...">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">URL Chức Năng</label>
                            <input v-model="edit_chuc_nang.url_chuc_nang" type="text" class="form-control"
                                placeholder="Nhập URL chức năng...">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Method Chức Năng</label>
                            <input v-model="edit_chuc_nang.method_chuc_nang" type="text" class="form-control"
                                placeholder="Nhập method chức năng...">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô Tả</label>
                            <textarea v-model="edit_chuc_nang.mo_ta_chuc_nang" class="form-control" rows="3"
                                placeholder="Nhập mô tả chức năng..."></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình trạng</label>
                            <select v-model="edit_chuc_nang.tinh_trang" class="form-select">
                                <option value="1">Đang hoạt động</option>
                                <option value="0">Ngừng hoạt động</option>
                            </select>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                            <button v-on:click="editChucNang()" type="button" class="btn btn-primary shadow-sm"
                                data-bs-dismiss="modal">Lưu Lại</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Chức Năng</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa chức năng này?</h5>
                    <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-dismiss="modal">Hủy</button>
                    <button v-on:click="xoaChucNang()" type="button" class="btn btn-danger px-4 shadow-sm"
                        data-bs-dismiss="modal">Xác Nhận Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            listChucNang: [],
            them_chuc_nang: {},
            edit_chuc_nang: {},
            xoa_chuc_nang: {}
        }
    },
    created() {
        this.getChucNang();
    },
    methods: {
        getChucNang() {
            axios
                .get('http://127.0.0.1:8000/api/admin/chuc-nang')
                .then(response => {
                    this.listChucNang = response.data.data;
                })
                .catch(error => {
                    console.error('Lỗi khi lấy danh sách Chức Năng:', error);
                    this.$toast.error('Đã xảy ra lỗi khi tải danh sách Chức Năng.');
                });
        },
        themChucNang() {
            axios
                .post('http://127.0.0.1:8000/api/admin/chuc-nang/create', this.them_chuc_nang)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getChucNang();
                        this.them_chuc_nang = {};
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thêm mới Chức Năng:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi thêm mới Chức Năng.');
                    }
                });
        },
        editChucNang() {
            axios
                .put('http://127.0.0.1:8000/api/admin/chuc-nang/update', this.edit_chuc_nang)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getChucNang();
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi cập nhật Chức Năng:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi cập nhật Chức Năng.');
                    }
                });
        },
        xoaChucNang() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/chuc-nang/delete/' + this.xoa_chuc_nang.id)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getChucNang();
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi xóa Chức Năng:', error);
                    this.$toast.error('Đã xảy ra lỗi khi xóa Chức Năng.');
                });
        },
        changeStatus(item) {
            const new_tinh_trang = item.tinh_trang == 1 ? 0 : 1;
            axios
                .patch('http://127.0.0.1:8000/api/admin/chuc-nang/change-status', {
                    id: item.id,
                    tinh_trang: new_tinh_trang
                })
                .then(response => {
                    if (response.data.status == 1) {
                        this.getChucNang();
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thay đổi trạng thái Chức Năng:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi thay đổi trạng thái Chức Năng.');
                    }
                });
        }
    },
}
</script>

<style scoped></style>
