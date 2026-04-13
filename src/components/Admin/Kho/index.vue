<template>
    <div class="row">
        <!-- 1. Thêm Kho -->
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Thêm Kho</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Kho</label>
                            <input v-model="them_kho.ten" type="text" class="form-control" placeholder="Nhập tên kho">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea v-model="them_kho.ghi_chu" class="form-control" rows="3"
                                placeholder="Nhập ghi chú"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình trạng</label>
                            <select v-model="them_kho.tinh_trang" class="form-select">
                                <option value="">Chọn tình trạng</option>
                                <option :value="1">Đang hoạt động</option>
                                <option :value="0">Ngừng hoạt động</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button v-on:click="themKho()" class="btn btn-primary px-4 shadow-sm">Thêm mới</button>
                </div>
            </div>
        </div>

        <!-- 2. Danh Sách Kho -->
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Danh sách Kho</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Kho</th>
                                    <th>Ghi Chú</th>
                                    <th>Tình trạng</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="listKho && listKho.length > 0">
                                    <tr v-for="(item, index) in listKho" :key="item.id" class="text-center">
                                        <td>{{ index + 1 }}</td>
                                        <td class="text-start">{{ item.ten }}</td>
                                        <td class="text-start">{{ item.ghi_chu }}</td>
                                        <td>
                                            <button v-on:click="changeStatus(item)" v-if="item.tinh_trang == 1"
                                                class="btn btn-success btn-sm w-100 shadow-sm">Đang hoạt động</button>
                                            <button v-on:click="changeStatus(item)" v-else
                                                class="btn btn-secondary btn-sm w-100 shadow-sm">Ngừng hoạt
                                                động</button>
                                        </td>
                                        <td class="text-nowrap">

                                            <button type="button" class="btn btn-warning btn-sm me-1 shadow-sm"
                                                data-bs-toggle="modal" data-bs-target="#editModal"
                                                v-on:click="Object.assign(edit_kho, item)">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm shadow-sm"
                                                data-bs-toggle="modal" data-bs-target="#deleteModal"
                                                v-on:click="Object.assign(xoa_kho, item)">
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



    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title">Cập Nhật Kho</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Kho</label>
                            <input v-model="edit_kho.ten" type="text" class="form-control shadow-sm"
                                placeholder="Nhập tên kho">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea v-model="edit_kho.ghi_chu" class="form-control shadow-sm" rows="3"
                                placeholder="Nhập ghi chú"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình Trạng</label>
                            <select v-model="edit_kho.tinh_trang" class="form-select shadow-sm">
                                <option :value="1">Đang hoạt động</option>
                                <option :value="0">Ngừng hoạt động</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-warning shadow-sm px-4" data-bs-dismiss="modal"
                        @click="editKho">Lưu Thay Đổi</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Kho</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa kho này?</h5>
                    <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger px-4 shadow-sm" @click="xoaKho">Xác Nhận Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'KhoManager',
    data() {
        return {
            listKho: [],
            them_kho: {
                ten: '',
                ghi_chu: '',
                tinh_trang: "",
            },
            edit_kho: {},
            xoa_kho: {},
        };
    },
    created() {
        this.getKho();
    },
    methods: {
        getKho() {
            axios
                .get('http://127.0.0.1:8000/api/admin/kho')
                .then(response => {
                    this.listKho = response.data.data || [];
                })
                .catch(error => {
                    console.error('Lỗi khi tải danh sách Kho:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi tải danh sách Kho.');
                });
        },
        themKho() {
            axios
                .post('http://127.0.0.1:8000/api/admin/kho/create', this.them_kho)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKho();
                        this.them_kho = {
                            ten: '',
                            ghi_chu: '',
                            tinh_trang: "",
                        };
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thêm mới Kho:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi thêm mới Kho.');
                    }
                });
        },

        editKho() {
            axios
                .put('http://127.0.0.1:8000/api/admin/kho/update', this.edit_kho)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKho();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#editModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi cập nhật Kho:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi cập nhật Kho.');
                    }
                });
        },
        xoaKho() {
            axios
                .delete(`http://127.0.0.1:8000/api/admin/kho/delete/${this.xoa_kho.id}`)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKho();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#deleteModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi xóa Kho:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi xóa Kho.');
                });
        },

        changeStatus(item) {
            const new_tinh_trang = item.tinh_trang == 1 ? 0 : 1;
            axios
                .patch('http://127.0.0.1:8000/api/admin/kho/change-status', {
                    id: item.id,
                    tinh_trang: new_tinh_trang
                })
                .then(response => {
                    if (response.data.status == 1) {
                        this.getKho();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thay đổi trạng thái Kho:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi thay đổi trạng thái Kho.');
                    }
                });
        },

    },
};
</script>

<style scoped></style>
