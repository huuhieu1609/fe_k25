<template>
    <div class="row">
        <!-- 1. Thêm Chức Vụ -->
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Thêm Chức Vụ</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Chức Vụ</label>
                            <input v-model="them_chuc_vu.ten_chuc_vu" type="text" class="form-control" placeholder="Nhập tên Chức Vụ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Slug Chức Vụ</label>
                            <input v-model="them_chuc_vu.slug_chuc_vu" type="text" class="form-control" placeholder="Nhập slug Chức Vụ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình trạng</label>
                            <select v-model="them_chuc_vu.tinh_trang" class="form-select">
                                <option value="#">Chọn tình trạng</option>
                                <option value="1">Đang làm việc</option>
                                <option value="0">Đã nghỉ việc</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô tả</label>
                            <textarea v-model="them_chuc_vu.mo_ta" class="form-control" rows="3" placeholder="Nhập mô tả"></textarea>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themChucVu()" class="btn btn-primary px-4 shadow-sm">Thêm mới</button>
                </div>
            </div>
        </div>

        <!-- 2. Danh Sách Chức Vụ -->
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Danh sách Chức Vụ</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Chức Vụ</th>
                                    <th>Slug Chức Vụ</th>
                                    <th>Tình trạng</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value,index) in listChucVu" :key="index">
                                    <tr class="text-center">
                                        <td>{{ index + 1 }}</td>
                                        <td class="text-start">{{ value.ten_chuc_vu }}</td>
                                        <td class="text-start">{{ value.slug_chuc_vu }}</td>
                                        <td>
                                            <button v-on:click="changeStatus(value)" v-if="value.tinh_trang == 1" class="btn btn-success btn-sm w-100 shadow-sm">Đang làm việc</button>
                                            <button v-on:click="changeStatus(value)" v-else class="btn btn-secondary btn-sm w-100 shadow-sm">Đã nghỉ việc</button>
                                        </td>
                                        <td>
                                            <button v-on:click="Object.assign(edit_chuc_vu,value)" class="btn btn-warning btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button v-on:click="Object.assign(xoa_chuc_vu,value)" class="btn btn-danger btn-sm shadow-sm" data-bs-toggle="modal"
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

    <!-- modal cập nhật Chức Vụ -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập nhật Chức Vụ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Chức Vụ</label>
                            <input v-model="edit_chuc_vu.ten_chuc_vu" type="text" class="form-control" placeholder="nhập tên Chức Vụ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Slug Chức Vụ</label>
                            <input v-model="edit_chuc_vu.slug_chuc_vu" type="text" class="form-control" placeholder="nhập slug Chức Vụ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình trạng</label>
                            <select v-model="edit_chuc_vu.tinh_trang" class="form-select">
                                <option value="1">Đang làm việc</option>
                                <option value="0">Đã nghỉ việc</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô tả</label>
                            <textarea v-model="edit_chuc_vu.mo_ta" class="form-control" rows="3" placeholder="nhập mô tả"></textarea>
                        </div>
                        <div class="modal-footer ">
                            <button type="button" class="btn btn-secondary px-4 shadow-sm"
                                data-bs-dismiss="modal">Hủy</button>
                            <button v-on:click="editChucVu()" type="button" class="btn btn-primary px-4 shadow-sm">Cập Nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- modal xóa Chức Vụ -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Chức Vụ</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa Chức Vụ này?</h5>
                    <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-dismiss="modal">Hủy</button>
                    <button v-on:click="xoaChucVu()" type="button" class="btn btn-danger px-4 shadow-sm" data-bs-dismiss="modal">Xác Nhận Xóa</button>
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
            listChucVu: [],
            them_chuc_vu:{},
            edit_chuc_vu:{},
            xoa_chuc_vu:{},
            change_status:{}
        }
    },
    created() {
        this.getChucVu();
    },
    methods: {
        getChucVu() {
            // Gọi API để lấy danh sách Chức Vụ
            axios
                .get('http://127.0.0.1:8000/api/admin/chuc-vu')
                .then(response => {
                    this.listChucVu = response.data.data;
                })
                .catch(error => {
                    console.error('Lỗi khi thêm mới Chức Vụ:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi thêm mới Chức Vụ.');
                    }
                });
        },
        themChucVu(){
            axios
                .post('http://127.0.0.1:8000/api/admin/chuc-vu/create', this.them_chuc_vu)
                .then(response => {
                    if(response.data.status == 1) {
                        this.getChucVu();
                        this.them_chuc_vu = {};
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);                      
                    } else {
                        this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }                  
                })
                .catch(error => {
                    console.error('Lỗi khi thêm mới Chức Vụ:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi thêm mới Chức Vụ.');
                    }
                });
        },
        xoaChucVu() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/chuc-vu/delete/' + this.xoa_chuc_vu.id)
                .then(response => {
                    if(response.data.status == 1) {
                        this.getChucVu();
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);                      
                    } else {
                        this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }                  
                })
        },
        editChucVu() {
            axios
                .put('http://127.0.0.1:8000/api/admin/chuc-vu/update', this.edit_chuc_vu)
                .then(response => {
                    if(response.data.status == 1) {
                        this.getChucVu();
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);                      
                    } else {
                        this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi cập nhật Chức Vụ:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi cập nhật Chức Vụ.');
                    }
                });
        },
        changeStatus(item) {
            const new_tinh_trang = item.tinh_trang == 1 ? 0 : 1;
            axios
                .delete('http://127.0.0.1:8000/api/admin/chuc-vu/change-status', {
                    data: {
                        id: item.id,
                        tinh_trang: new_tinh_trang
                    }
                })
                .then(response => {
                    if (response.data.status == 1) {
                        this.getChucVu();
                        this.$toast.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thay đổi trạng thái Chức Vụ:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error('Đã xảy ra lỗi khi thay đổi trạng thái Chức Vụ.');
                    }
                });
        }
    },
}
</script>

<style></style>
