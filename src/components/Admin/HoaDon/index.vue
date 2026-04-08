<template>
    <div class="row">
        <div class="col-lg-5">
            <div class="card border-top border-0 border-4 border-primary shadow-sm mt-2">
                <div class="card-header">
                    <h5 class="card-title mb-0">Tạo Hóa Đơn Mới</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Mã hóa đơn</label>
                                <input type="text" class="form-control" value="HD-MAU-001" placeholder="VD: HD0001">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Ngày bán</label>
                                <input type="date" class="form-control" value="2026-04-08">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label class="form-label fw-bold">Ca làm việc</label>
                                <input type="text" class="form-control" value="Ca sang" placeholder="Ca sáng">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label fw-bold">Nhân viên</label>
                                <input type="text" class="form-control" value="Tran Van B" placeholder="Nguyen Van A">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label class="form-label fw-bold">Khách hàng</label>
                                <input type="text" class="form-control" value="Nguyen Thi C" placeholder="Le Thi B">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Giảm giá hóa đơn</label>
                                <input type="number" min="0" class="form-control" value="20000" placeholder="0">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Thuế VAT hóa đơn</label>
                                <input type="number" min="0" class="form-control" value="30000" placeholder="0">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Loại thanh toán</label>
                                <select class="form-select">
                                    <option value="tien_mat" selected>Tiền mặt</option>
                                    <option value="chuyen_khoan">Chuyển khoản</option>
                                    <option value="the">Thẻ</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label fw-bold">Đã thanh toán</label>
                                <select class="form-select">
                                    <option value="1" selected>Đã thanh toán</option>
                                    <option value="0">Chưa thanh toán</option>
                                </select>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Trạng thái đơn</label>
                            <select class="form-select">
                                <option value="0">Mới tạo</option>
                                <option value="1" selected>Hoàn thành</option>
                                <option value="2">Đã hủy</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-bold">Ghi chú</label>
                            <textarea class="form-control" rows="3" placeholder="Nhập ghi chú...">Don mau de demo giao dien tao hoa don</textarea>
                        </div>

                        <div class="border rounded p-3 bg-light">
                            <div class="row">
                                <div class="col-6 small text-muted">Tổng tiền hàng</div>
                                <div class="col-6 text-end fw-bold">880,000</div>
                                <div class="col-6 small text-muted">Giảm giá</div>
                                <div class="col-6 text-end">- 40,000</div>
                                <div class="col-6 small text-muted">Thuế VAT</div>
                                <div class="col-6 text-end">+ 42,000</div>
                                <div class="col-6 pt-2 mt-2 border-top fw-bold">Tổng thanh toán</div>
                                <div class="col-6 pt-2 mt-2 border-top text-end text-primary fw-bold">882,000</div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer d-grid">
                    <button class="btn btn-primary fw-bold" type="button">
                        <i class="fa fa-save me-2"></i>Tạo hóa đơn và thanh toán
                    </button>
                </div>
            </div>
        </div>

        <div class="col-lg-7">
            <div class="card border-top border-0 border-4 border-primary shadow-sm mt-2">
                <div class="card-header">
                    <h5 class="card-title mb-0">Thêm Sản Phẩm Vào Hóa Đơn</h5>
                </div>
                <div class="card-body">
                    <div class="row g-2 align-items-end mb-3">
                        <div class="col-md-5">
                            <label class="form-label fw-bold">Sản phẩm</label>
                            <input type="text" class="form-control" placeholder="Thit bo My nhap khau">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label fw-bold">SL</label>
                            <input type="number" min="1" class="form-control" placeholder="1">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label fw-bold">Đơn giá</label>
                            <input type="number" min="0" class="form-control" placeholder="0">
                        </div>
                        <div class="col-md-3 d-grid">
                            <button class="btn btn-primary" type="button">
                                <i class="fa fa-plus me-1"></i>Thêm sản phẩm
                            </button>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-bordered table-striped align-middle">
                            <thead class="table-light text-center text-nowrap">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>SL</th>
                                    <th>Đơn giá</th>
                                    <th>Giảm giá</th>
                                    <th>VAT</th>
                                    <th>Thành tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>1</td>
                                    <td class="text-start">Thit bo My nhap khau</td>
                                    <td>
                                        <input type="number" min="1" value="2"
                                            class="form-control form-control-sm text-center">
                                    </td>
                                    <td>
                                        <input type="number" min="0" value="350000"
                                            class="form-control form-control-sm text-end">
                                    </td>
                                    <td>
                                        <input type="number" min="0" value="15000"
                                            class="form-control form-control-sm text-end">
                                    </td>
                                    <td>
                                        <input type="number" min="0" value="30000"
                                            class="form-control form-control-sm text-end">
                                    </td>
                                    <td class="text-end fw-bold">715,000</td>
                                    <td>
                                        <button class="btn btn-outline-danger btn-sm" type="button">
                                            <i class="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr class="text-center">
                                    <td>2</td>
                                    <td class="text-start">Ca hoi Na Uy dong goi</td>
                                    <td>
                                        <input type="number" min="1" value="1"
                                            class="form-control form-control-sm text-center">
                                    </td>
                                    <td>
                                        <input type="number" min="0" value="180000"
                                            class="form-control form-control-sm text-end">
                                    </td>
                                    <td>
                                        <input type="number" min="0" value="5000"
                                            class="form-control form-control-sm text-end">
                                    </td>
                                    <td>
                                        <input type="number" min="0" value="12000"
                                            class="form-control form-control-sm text-end">
                                    </td>
                                    <td class="text-end fw-bold">187,000</td>
                                    <td>
                                        <button class="btn btn-outline-danger btn-sm" type="button">
                                            <i class="fa fa-times"></i>
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
export default {
    name: 'HoaDonManager',
};
</script>

<style scoped></style>
