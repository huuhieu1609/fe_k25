<template>
    <div class="card border-top border-0 border-4 border-primary shadow-sm mt-2">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0">Quản Lý Tất Cả Hóa Đơn</h5>
            <div class="d-flex gap-2">
                <span class="badge bg-primary align-self-center">2 hóa đơn</span>
                <button class="btn btn-sm btn-outline-primary" type="button">Tải lại</button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-striped table-hover align-middle">
                    <thead class="text-center text-nowrap table-light">
                        <tr>
                            <th>STT</th>
                            <th>Mã HĐ</th>
                            <th>Ngày bán</th>
                            <th>Khách hàng</th>
                            <th>Nhân viên</th>
                            <th>Ca làm việc</th>
                            <th>Tổng tiền hàng</th>
                            <th>Giảm giá</th>
                            <th>VAT</th>
                            <th>Tổng thanh toán</th>
                            <th>Loại TT</th>
                            <th>TT thanh toán</th>
                            <th>Trạng thái</th>
                            <th>Số dòng SP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center">
                            <td>1</td>
                            <td class="fw-bold">HD-MAU-001</td>
                            <td>2026-04-08</td>
                            <td class="text-start">Nguyen Thi C</td>
                            <td class="text-start">Tran Van B</td>
                            <td>Ca sang</td>
                            <td class="text-end">880,000</td>
                            <td class="text-end">40,000</td>
                            <td class="text-end">42,000</td>
                            <td class="text-end fw-bold text-primary">882,000</td>
                            <td>Tiền mặt</td>
                            <td>
                                <span class="badge bg-success">Đã thanh toán</span>
                            </td>
                            <td>
                                <span class="badge bg-primary">Hoàn thành</span>
                            </td>
                            <td>2</td>
                        </tr>
                        <tr class="text-center">
                            <td>2</td>
                            <td class="fw-bold">HD-MAU-002</td>
                            <td>2026-04-07</td>
                            <td class="text-start">Le Van D</td>
                            <td class="text-start">Pham Van E</td>
                            <td>Ca chieu</td>
                            <td class="text-end">560,000</td>
                            <td class="text-end">20,000</td>
                            <td class="text-end">28,000</td>
                            <td class="text-end fw-bold text-primary">568,000</td>
                            <td>Chuyển khoản</td>
                            <td>
                                <span class="badge bg-secondary">Chưa thanh toán</span>
                            </td>
                            <td>
                                <span class="badge bg-warning text-dark">Mới tạo</span>
                            </td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuanLyHoaDonManager',
};
</script>

<style scoped></style>