<template>
    <div>
        <div class="row mt-2">
            <!-- 1. Danh Sách Chức Vụ -->
            <div class="col-lg-4">
                <div class="card border-top border-0 border-4 border-primary shadow-sm">
                    <div class="card-header d-flex justify-content-between align-items-center bg-transparent">
                        <h5 class="card-title mb-0">Danh Sách Chức Vụ</h5>
                        <button class="btn btn-primary btn-sm px-3 shadow-sm" data-bs-toggle="modal"
                            data-bs-target="#addChucVuModal">
                            <i class="fa fa-plus me-1"></i>Thêm Mới
                        </button>
                    </div>
                    <div class="card-body">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Tìm kiếm chức vụ...">
                            <button class="btn btn-primary px-4 shadow-sm">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover align-middle">
                                <thead class="text-center text-nowrap table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Tên Chức Vụ</th>
                                        <th>Trạng Thái</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td>1</td>
                                        <td>Admin</td>
                                        <td>
                                            <button class="btn btn-success btn-sm w-100 shadow-sm">Hoạt Động</button>
                                        </td>
                                        <td class="text-nowrap">

                                            <button class="btn btn-info btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button class="btn btn-danger btn-sm shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>2</td>
                                        <td>Quản Lý Kho</td>
                                        <td>
                                            <button class="btn btn-success btn-sm w-100 shadow-sm">Hoạt Động</button>
                                        </td>
                                        <td class="text-nowrap">

                                            <button class="btn btn-info btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button class="btn btn-danger btn-sm shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. Danh Sách Chức Năng -->
            <div class="col-lg-4">
                <div class="card border-top border-0 border-4 border-primary shadow-sm">
                    <div class="card-header bg-transparent">
                        <h5 class="card-title mb-0">Danh Sách Chức Năng</h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover align-middle">
                                <thead class="text-center text-nowrap table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Tên Chức Năng</th>
                                        <th>Cấp Quyền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td>1</td>
                                        <td class="text-start">Quản lý chức vụ</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm px-3 shadow-sm">
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>2</td>
                                        <td class="text-start">Thêm chức vụ</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm px-3 shadow-sm">
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>3</td>
                                        <td class="text-start">Sửa chức vụ</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm px-3 shadow-sm">
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>4</td>
                                        <td class="text-start">Xóa chức vụ</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm px-3 shadow-sm">
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>5</td>
                                        <td class="text-start">Danh sách nhân viên</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm px-3 shadow-sm">
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>6</td>
                                        <td class="text-start">Thêm nhân viên</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm px-3 shadow-sm">
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>7</td>
                                        <td class="text-start">Sửa nhân viên</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm px-3 shadow-sm">
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>8</td>
                                        <td class="text-start">Xóa nhân viên</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm px-3 shadow-sm">
                                                Thêm
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Đang Phân Quyền -->
            <div class="col-lg-4">
                <div class="card border-top border-0 border-4 border-primary shadow-sm">
                    <div class="card-header bg-transparent">
                        <h5 class="card-title mb-0">Đang Phân Quyền:<br><span
                                class="text-danger fw-bold fs-6">Admin</span>
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover align-middle">
                                <thead class="text-center text-nowrap table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Tên Quyền</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td>1</td>
                                        <td class="text-start">Quản lý Nhân Viên</td>
                                        <td>
                                            <button class="btn btn-danger btn-sm px-2 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#removeQuyenModal" @click="obj_delete_quyen = { ten_quyen: 'Quản lý Nhân Viên' }">
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>2</td>
                                        <td class="text-start">Quản lý Khách Hàng</td>
                                        <td>
                                            <button class="btn btn-danger btn-sm px-2 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#removeQuyenModal" @click="obj_delete_quyen = { ten_quyen: 'Quản lý Khách Hàng' }">
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>3</td>
                                        <td class="text-start">Quản lý Nhà Cung Cấp</td>
                                        <td>
                                            <button class="btn btn-danger btn-sm px-2 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#removeQuyenModal" @click="obj_delete_quyen = { ten_quyen: 'Quản lý Nhà Cung Cấp' }">
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>4</td>
                                        <td class="text-start">Quản lý Công Nợ NCC</td>
                                        <td>
                                            <button class="btn btn-danger btn-sm px-2 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#removeQuyenModal" @click="obj_delete_quyen = { ten_quyen: 'Quản lý Công Nợ NCC' }">
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>5</td>
                                        <td class="text-start">Quản lý Ca Làm Việc</td>
                                        <td>
                                            <button class="btn btn-danger btn-sm px-2 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#removeQuyenModal" @click="obj_delete_quyen = { ten_quyen: 'Quản lý Ca Làm Việc' }">
                                                Xóa
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

        <!-- Delete Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white border-bottom-0">
                        <h5 class="modal-title text-white">Xác Nhận Xóa</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center py-4">
                        <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                        <h5 class="fw-bold fs-5">Xác nhận xóa chức vụ?</h5>
                        <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                    </div>
                    <div class="modal-footer justify-content-center border-top-0">
                        <button type="button" class="btn btn-secondary px-4 shadow-sm"
                            data-bs-dismiss="modal">Hủy</button>
                        <button type="button" class="btn btn-danger px-4 shadow-sm" @click="deleteChucVu()">Xác Nhận
                            Xóa</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Chức Vụ Modal -->
        <div class="modal fade" id="addChucVuModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white border-bottom-0">
                        <h5 class="modal-title text-white">Thêm Mới Chức Vụ</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Chức Vụ</label>
                            <input v-model="obj_add.ten_chuc_vu" type="text" class="form-control"
                                placeholder="Nhập tên chức vụ">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình Trạng</label>
                            <select v-model="obj_add.tinh_trang" class="form-select">
                                <option value="1">Hoạt động</option>
                                <option value="0">Tạm dừng</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer border-top-0">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary px-4" @click="createChucVu()">Lưu Lại</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Chức Vụ Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-dark border-bottom-0">
                        <h5 class="modal-title">Cập Nhật Chức Vụ</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tên Chức Vụ</label>
                            <input v-model="obj_edit.ten_chuc_vu" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tình Trạng</label>
                            <select v-model="obj_edit.tinh_trang" class="form-select">
                                <option value="1">Hoạt động</option>
                                <option value="0">Tạm dừng</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer border-top-0">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-warning px-4 text-dark" @click="updateChucVu()">Cập
                            Nhật</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Remove Permission Modal -->
        <div class="modal fade" id="removeQuyenModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white border-bottom-0">
                        <h5 class="modal-title text-white">Xác Nhận Xóa Quyền</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center py-4">
                        <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem;"></i>
                        <h5 class="fw-bold fs-5">Xác nhận gỡ quyền?</h5>
                        <p class="text-muted small">Bạn đang muốn gỡ quyền: <b class="text-danger">{{ obj_delete_quyen.ten_quyen }}</b></p>
                        <p class="text-muted small mb-0">Hành động này không thể hoàn tác.</p>
                    </div>
                    <div class="modal-footer justify-content-center border-top-0">
                        <button type="button" class="btn btn-secondary px-4 shadow-sm"
                            data-bs-dismiss="modal">Hủy</button>
                        <button type="button" class="btn btn-danger px-4 shadow-sm" @click="removeQuyen()">Xác Nhận Gỡ Bỏ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PhanQuyenManager",
    data() {
        return {
            obj_add: {
                ten_chuc_vu: "",
                tinh_trang: 1
            },
            obj_edit: {},
            obj_delete: {},
            obj_delete_quyen: {}
        }
    },
    methods: {
        createChucVu() {
            // Implement logic
            console.log("Create Chuc Vu:", this.obj_add);
        },
        updateChucVu() {
            // Implement logic
            console.log("Update Chuc Vu:", this.obj_edit);
        },
        deleteChucVu() {
            // Implement logic
            console.log("Delete Chuc Vu:", this.obj_delete);
        },
        removeQuyen() {
            // Implement logic
            console.log("Remove Permission:", this.obj_delete_quyen);
        }
    }
}
</script>

<style scoped></style>
