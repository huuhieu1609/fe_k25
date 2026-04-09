<template>
    <div class="row">
        <!-- 1. Thêm Ca Làm Việc (Column 4) -->
        <div class="col-lg-4">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Thêm Ca Làm Việc</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Nhân Viên</label>
                            <select v-model="them_ca_lam_viec.nhan_vien_id" class="form-select shadow-sm">
                                <option selected disabled>Chọn nhân viên...</option>
                                <option v-for="item in list_nhan_vien" :key="item.id" :value="item.id">
                                    {{ item.ho_va_ten }}
                                </option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Giờ Mở</label>
                            <input v-model="them_ca_lam_viec.gio_mo" type="datetime-local"
                                class="form-control shadow-sm" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Giờ Đóng</label>
                            <input v-model="them_ca_lam_viec.gio_dong" type="datetime-local"
                                class="form-control shadow-sm" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tiền Đầu Ca</label>
                            <input v-model="them_ca_lam_viec.tien_dau_ca" type="number" class="form-control shadow-sm"
                                placeholder="Nhập số tiền đầu ca..." />
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tiền Kết Ca</label>
                            <input v-model="them_ca_lam_viec.tien_ket_ca" type="number" class="form-control shadow-sm"
                                placeholder="Nhập số tiền kết ca..." />
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">chênh lệch</label>
                            <input v-model="them_ca_lam_viec.chenh_lech" type="number" class="form-control shadow-sm"
                                placeholder="Nhập số tiền chênh lệch..." />
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi Chú</label>
                            <textarea v-model="them_ca_lam_viec.ghi_chu" class="form-control shadow-sm" rows="3"
                                placeholder="Nhập ghi chú..."></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold">Trạng Thái</label>
                            <select v-model="them_ca_lam_viec.trang_thai" class="form-select shadow-sm">
                                <option value="0">Đang Mở</option>
                                <option value="1">Đã Kết Ca</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button @click="addCaLamViec()" class="btn btn-primary px-4 shadow-sm">
                        Thêm Mới
                    </button>
                </div>
            </div>
        </div>

        <!-- 2. Danh Sách Ca Làm Việc (Column 8) -->
        <div class="col-lg-8">
            <div class="card border-top border-0 border-4 border-primary mt-2 shadow-sm">
                <div class="card-header">
                    <h5 class="card-title">Danh Sách Ca Làm Việc</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover align-middle">
                            <thead class="text-center text-nowrap table-light">
                                <tr>
                                    <th>STT</th>
                                    <th>Nhân Viên</th>
                                    <th>Giờ Mở</th>
                                    <th>Giờ Đóng</th>
                                    <th>Tiền Đầu Ca</th>
                                    <th>Tiền Kết Ca</th>
                                    <th>Lệch</th>
                                    <th>Ghi Chú</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(item, index) in list_ca_lam_viec" :key="item.id">
                                    <tr class="text-center">
                                        <td>{{ index + 1 }}</td>
                                        <td class="text-start">{{ item.ho_va_ten }}</td>
                                        <td class="text-center text-success fw-bold">
                                            {{ item.gio_mo }}
                                        </td>
                                        <td class="text-center text-danger fw-bold">
                                            {{ item.gio_dong }}
                                        </td>
                                        <td class="text-end">{{ item.tien_dau_ca }}</td>
                                        <td class="text-end">{{ item.tien_ket_ca }}</td>
                                        <td>{{ item.chenh_lech }}</td>
                                        <td class="text-start">
                                            {{ item.ghi_chu }}
                                        </td>
                                        <td>
                                            <button v-if="item.trang_thai == 1" v-on:click="changeStatus(item)"
                                                class="btn btn-success btn-sm w-100 shadow-sm">
                                                Đã Kết Ca
                                            </button>
                                            <button v-else v-on:click="changeStatus(item)"
                                                class="btn btn-danger btn-sm w-100 shadow-sm">
                                                Đang Mở
                                            </button>
                                        </td>
                                        <td class="text-nowrap">
                                            <button v-on:click="Object.assign(edit_ca_lam_viec, item)"
                                                class="btn btn-warning btn-sm me-1 shadow-sm" data-bs-toggle="modal"
                                                data-bs-target="#editModal">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button v-on:click="Object.assign(delete_ca_lam_viec, item)"
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

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Ca Làm Việc</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Nhân Viên</label>
                                <select v-model="edit_ca_lam_viec.nhan_vien_id" class="form-select shadow-sm">
                                    <option v-for="item in list_nhan_vien" :key="item.id" :value="item.id">
                                        {{ item.ho_va_ten }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Trạng Thái</label>
                                <select v-model="edit_ca_lam_viec.trang_thai" class="form-select shadow-sm">
                                    <option value="0">Đang Mở</option>
                                    <option value="1">Đã Kết Ca</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Giờ Mở</label>
                                <input v-model="edit_ca_lam_viec.gio_mo" type="datetime-local"
                                    class="form-control shadow-sm" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Giờ Đóng</label>
                                <input v-model="edit_ca_lam_viec.gio_dong" type="datetime-local"
                                    class="form-control shadow-sm" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label fw-bold">Tiền Đầu Ca</label>
                                <input v-model="edit_ca_lam_viec.tien_dau_ca" type="number"
                                    class="form-control shadow-sm" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label fw-bold">Tiền Kết Ca</label>
                                <input v-model="edit_ca_lam_viec.tien_ket_ca" type="number"
                                    class="form-control shadow-sm" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label fw-bold">Chênh Lệch</label>
                                <input v-model="edit_ca_lam_viec.chenh_lech" type="number"
                                    class="form-control shadow-sm" />
                            </div>
                            <div class="col-md-12 mb-3">
                                <label class="form-label fw-bold">Ghi Chú</label>
                                <textarea v-model="edit_ca_lam_viec.ghi_chu" class="form-control shadow-sm" rows="3">
                                Ca
                                sáng</textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary shadow-sm" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button v-on:click="updateCaLamViec()" type="button" data-bs-dismiss="modal"
                        class="btn btn-primary shadow-sm px-4">
                        Lưu Thay Đổi
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white">Xóa Ca Làm Việc</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body text-center py-4">
                    <i class="fa fa-exclamation-triangle text-warning mb-3" style="font-size: 3rem"></i>
                    <h5 class="fw-bold fs-5">
                        Bạn có chắc chắn muốn xóa ca làm việc này?
                    </h5>
                    <p class="text-muted small">Hành động này không thể hoàn tác.</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-secondary px-4 shadow-sm" data-bs-toggle="modal">
                        Hủy
                    </button>
                    <button v-on:click="deleteCaLamViec()" type="button" class="btn btn-danger px-4 shadow-sm"
                        data-bs-toggle="modal">
                        Xác Nhận Xóa
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "CaLamViecManager",
    data() {
        return {
            list_nhan_vien: [],
            list_ca_lam_viec: [],
            them_ca_lam_viec: {
                nhan_vien_id: "",
                gio_mo: "",
                gio_dong: "",
                tien_dau_ca: "",
                tien_ket_ca: "",
                chenh_lech: "",
                ghi_chu: "",
                trang_thai: 1,
            },
            edit_ca_lam_viec: {
                nhan_vien_id: "",
                gio_mo: "",
                gio_dong: "",
                tien_dau_ca: "",
                tien_ket_ca: "",
                chenh_lech: "",
                ghi_chu: "",
                trang_thai: "",
            },
            delete_ca_lam_viec: {
                id: "",
            },
        };
    },
    created() {
        this.getNhanVien();
        this.getCaLamViec();
    },
    methods: {
        getNhanVien() {
            // Gọi API để lấy danh sách Nhân Viên
            axios
                .get("http://127.0.0.1:8000/api/admin/nhan-vien")
                .then((response) => {
                    this.list_nhan_vien = response.data.data;
                })
                .catch((error) => {
                    console.error("Lỗi khi thêm mới Nhân Viên:", error);
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.errors
                    ) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors)
                            .flat()
                            .map((msg) => `<li>${msg}</li>`)
                            .join("");
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error("Đã xảy ra lỗi khi thêm mới Nhân Viên.");
                    }
                });
        },
        getCaLamViec() {
            // Gọi API để lấy danh sách Ca Làm Việc
            axios
                .get("http://127.0.0.1:8000/api/admin/ca-lam-viec")
                .then((response) => {
                    this.list_ca_lam_viec = response.data.data;
                })
                .catch((error) => {
                    console.error("Lỗi khi thêm mới Ca Làm Việc:", error);
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.errors
                    ) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors)
                            .flat()
                            .map((msg) => `<li>${msg}</li>`)
                            .join("");
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error("Đã xảy ra lỗi khi thêm mới Ca Làm Việc.");
                    }
                });
        },
        addCaLamViec() {
            // Gọi API để thêm mới Ca Làm Việc
            axios
                .post(
                    "http://127.0.0.1:8000/api/admin/ca-lam-viec/create",
                    this.them_ca_lam_viec,
                )
                .then((response) => {
                    this.$toast.success(response.data.message);
                    this.getCaLamViec();
                    this.them_ca_lam_viec = {
                        nhan_vien_id: "",
                        gio_mo: "",
                        gio_dong: "",
                        tien_dau_ca: "",
                        tien_ket_ca: "",
                        chenh_lech: "",
                        ghi_chu: "",
                        trang_thai: 1,
                    };
                })
                .catch((error) => {
                    console.error("Lỗi khi thêm mới Ca Làm Việc:", error);
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.errors
                    ) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors)
                            .flat()
                            .map((msg) => `<li>${msg}</li>`)
                            .join("");
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error("Đã xảy ra lỗi khi thêm mới Ca Làm Việc.");
                    }
                });
        },
        updateCaLamViec() {
            // Gọi API để cập nhật Ca Làm Việc
            axios
                .put(
                    "http://127.0.0.1:8000/api/admin/ca-lam-viec/update",
                    this.edit_ca_lam_viec,
                )
                .then((response) => {
                    this.$toast.success(response.data.message);
                    this.getCaLamViec();
                })
                .catch((error) => {
                    console.error("Lỗi khi cập nhật Ca Làm Việc:", error);
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.errors
                    ) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors)
                            .flat()
                            .map((msg) => `<li>${msg}</li>`)
                            .join("");
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error("Đã xảy ra lỗi khi cập nhật Ca Làm Việc.");
                    }
                });
        },
        deleteCaLamViec() {
            // Gọi API để xóa Ca Làm Việc
            axios
                .delete(
                    `http://127.0.0.1:8000/api/admin/ca-lam-viec/delete/${this.delete_ca_lam_viec.id}`,
                )
                .then((response) => {
                    this.$toast.success(response.data.message);
                    this.getCaLamViec();
                })
                .catch((error) => {
                    console.error("Lỗi khi xóa Ca Làm Việc:", error);
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.errors
                    ) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors)
                            .flat()
                            .map((msg) => `<li>${msg}</li>`)
                            .join("");
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error("Đã xảy ra lỗi khi xóa Ca Làm Việc.");
                    }
                });
        },
        changeStatus(item) {
            const new_trang_thai = item.trang_thai == 1 ? 0 : 1;
            axios
                .patch("http://127.0.0.1:8000/api/admin/ca-lam-viec/change-status", {
                    id: item.id,
                    trang_thai: new_trang_thai,
                })
                .then((response) => {
                    if (response.data.status == 1) {
                        this.getCaLamViec();
                        this.$toast.success(
                            `<div style="text-align:left"><strong>✅ Thành công!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
                        );
                    } else {
                        this.$toast.error(
                            `<div style="text-align:left"><strong>❌ Lỗi!</strong><p style="margin:4px 0 0 0">${response.data.message}</p></div>`,
                        );
                    }
                })
                .catch((error) => {
                    console.error("Lỗi khi thay đổi trạng thái Ca Làm Việc:", error);
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.errors
                    ) {
                        const errors = error.response.data.errors;
                        const items = Object.values(errors)
                            .flat()
                            .map((msg) => `<li>${msg}</li>`)
                            .join("");
                        const messages = `<div style="text-align:left"><strong>⚠️ Vui lòng kiểm tra lại:</strong><ul style="margin:6px 0 0 0;padding-left:18px">${items}</ul></div>`;
                        this.$toast.error(messages);
                    } else {
                        this.$toast.error(
                            "Đã xảy ra lỗi khi thay đổi trạng thái Ca Làm Việc.",
                        );
                    }
                });
        },
    },
};
</script>

<style scoped>
/* Removed bo tròn styles to match ChucVu */
</style>
