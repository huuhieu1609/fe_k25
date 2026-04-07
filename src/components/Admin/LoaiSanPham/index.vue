<template>
    <div class="row">
        <!-- 1. Thêm Mới Loại Sản Phẩm -->
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Thêm Mới Loại Sản Phẩm</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Loại Sản Phẩm</label>
                            <input v-model="them_loai_san_pham.ten" type="text" class="form-control" placeholder="Nhập tên loại sản phẩm...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô Tả</label>
                            <textarea v-model="them_loai_san_pham.mo_ta" class="form-control" rows="3"
                                placeholder="Nhập mô tả về loại sản phẩm này..."></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Trạng Thái</label>
                            <select v-model="them_loai_san_pham.trang_thai" class="form-select">
                                <option value="1">Hoạt Động</option>
                                <option value="0">Tạm Dừng</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button @click="themLoaiSanPham" class="btn btn-primary px-4 shadow-sm">Thêm Mới</button>
                </div>
            </div>
        </div>

        <!-- 2. Danh Sách Loại Sản Phẩm -->
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Danh Sách Loại Sản Phẩm</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Loại Sản Phẩm</th>
                                    <th>Mô Tả</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="listLoaiSanPham.length">
                                    <tr v-for="(item, index) in listLoaiSanPham" :key="item.id" class="text-center">
                                        <td>{{ index + 1 }}</td>
                                        <td class="text-start">{{ item.ten }}</td>
                                        <td class="text-start small text-muted">{{ item.mo_ta }}</td>
                                        <td>
                                            <button v-on:click="changeStatus(item)" v-if="item.trang_thai == 1" class="btn btn-success btn-sm w-100 shadow-sm">Hoạt Động</button>
                                            <button v-on:click="changeStatus(item)" v-else class="btn btn-secondary btn-sm w-100 shadow-sm">Tạm Dừng</button>
                                        </td>
                                        <td class="text-nowrap">
                                            <button class="btn btn-warning btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#editModal" @click="prepareEdit(item)">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button class="btn btn-danger btn-sm shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal" @click="prepareDelete(item)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                                <tr v-else class="text-center">
                                    <td colspan="5">Không có dữ liệu loại sản phẩm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title">Cập Nhật Loại Sản Phẩm</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Loại Sản Phẩm</label>
                            <input v-model="edit_loai_san_pham.ten" type="text" class="form-control" placeholder="Nhập tên loại sản phẩm...">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Mô Tả</label>
                            <textarea v-model="edit_loai_san_pham.mo_ta" class="form-control" rows="3" placeholder="Nhập mô tả..."></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Trạng Thái</label>
                            <select v-model="edit_loai_san_pham.trang_thai" class="form-select">
                                <option value="1">Hoạt Động</option>
                                <option value="0">Tạm Dừng</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-warning shadow-sm" @click="editLoaiSanPham">Lưu Lại</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Loại Sản Phẩm</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                    <h5 class="fw-bold fs-5">Bạn có chắc chắn muốn xóa loại sản phẩm này?</h5>
                    <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger px-4 shadow-sm" @click="xoaLoaiSanPham">Xác Nhận Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LoaiSanPhamManager",
    data() {
        return {
            listLoaiSanPham: [],
            them_loai_san_pham: {
                ten: '',
                mo_ta: '',
                trang_thai: '1',
            },
            edit_loai_san_pham: {},
            xoa_loai_san_pham: {},
        }
    },
    created() {
        this.getLoaiSanPham();
    },
    methods: {
        getLoaiSanPham() {
            axios
                .get('http://127.0.0.1:8000/api/admin/loai-san-pham')
                .then(response => {
                    this.listLoaiSanPham = response.data.data || [];
                })
                .catch(error => {
                    console.error('Lỗi khi tải danh sách Loại Sản Phẩm:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi tải danh sách Loại Sản Phẩm.');
                });
        },
        themLoaiSanPham() {
            axios
                .post('http://127.0.0.1:8000/api/admin/loai-san-pham/create', this.them_loai_san_pham)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getLoaiSanPham();
                        this.them_loai_san_pham = {
                            ten: '',
                            mo_ta: '',
                            trang_thai: '1',
                        };
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thêm mới Loại Sản Phẩm:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi thêm mới Loại Sản Phẩm.');
                    }
                });
        },
        prepareEdit(item) {
            this.edit_loai_san_pham = { ...item };
        },
        prepareDelete(item) {
            this.xoa_loai_san_pham = item;
        },
        editLoaiSanPham() {
            axios
                .put('http://127.0.0.1:8000/api/admin/loai-san-pham/update', this.edit_loai_san_pham)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getLoaiSanPham();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#editModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi cập nhật Loại Sản Phẩm:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi cập nhật Loại Sản Phẩm.');
                    }
                });
        },
        xoaLoaiSanPham() {
            axios
                .delete(`http://127.0.0.1:8000/api/admin/loai-san-pham/delete/${this.xoa_loai_san_pham.id}`)
                .then(response => {
                    if (response.data.status == 1) {
                        this.getLoaiSanPham();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                        const modal = document.querySelector('#deleteModal .btn-close');
                        modal && modal.click();
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi xóa Loại Sản Phẩm:', error);
                    this.$toast?.error('Đã xảy ra lỗi khi xóa Loại Sản Phẩm.');
                });
        },
        changeStatus(item) {
            const new_trang_thai = item.trang_thai == 1 ? 0 : 1;
            axios
                .put('http://127.0.0.1:8000/api/admin/loai-san-pham/change-status', {
                    id: item.id,
                    trang_thai: new_trang_thai
                })
                .then(response => {
                    if (response.data.status == 1) {
                        this.getLoaiSanPham();
                        this.$toast?.success(`<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    } else {
                        this.$toast?.error(`<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`);
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi thay đổi trạng thái Loại Sản Phẩm:', error);
                    if (error.response && error.response.data && error.response.data.errors) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors).flat().map(msg => `<li>${msg}</li>`).join('');
                        this.$toast?.error(`<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`);
                    } else {
                        this.$toast?.error('Đã xảy ra lỗi khi thay đổi trạng thái Loại Sản Phẩm.');
                    }
                });
        },
    }
}
</script>

<style></style>
