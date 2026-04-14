<template>
    <div class="row">
        <!-- Panel Trái: Thêm Sản Phẩm Vào Hóa Đơn -->
        <div class="col-lg-7">
            <div class="card border-top border-0 border-4 border-primary shadow-sm mt-2">
                <div class="card-header">
                    <h5 class="card-title mb-0">Thêm Sản Phẩm Vào Hóa Đơn</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive border rounded mb-3">
                        <table class="table table-bordered table-hover table-striped align-middle mb-0">
                            <thead class="table-light text-center text-nowrap align-middle">
                                <tr>
                                    <th class="px-2">STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th class="px-2">SL</th>
                                    <th class="px-2">Đơn giá</th>
                                    <th class="px-2">Giảm giá</th>
                                    <th class="px-2">VAT</th>
                                    <th class="px-2">Thành tiền</th>
                                    <th class="px-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="list_chi_tiet.length === 0">
                                    <tr>
                                        <td colspan="8" class="text-center fst-italic text-secondary py-3">
                                            Chưa có sản phẩm nào trong hóa đơn
                                        </td>
                                    </tr>
                                </template>
                                <tr v-for="(value, index) in list_chi_tiet" :key="index" class="text-center">
                                    <td class="text-center align-middle">{{ index + 1 }}</td>
                                    <td class="text-start align-middle fw-medium">{{ value.ten_san_pham }}</td>
                                    <td class="text-center align-middle">
                                        <input type="number" min="1" v-model.number="value.so_luong"
                                            class="form-control form-control-sm text-center mx-auto" />
                                    </td>
                                    <td class="text-center align-middle">
                                        <input type="number" min="0" v-model.number="value.don_gia"
                                            class="form-control form-control-sm text-end" disabled />
                                    </td>
                                    <td class="text-center align-middle">
                                        <input type="number" min="0" v-model.number="value.giam_gia"
                                            class="form-control form-control-sm text-end" />
                                    </td>
                                    <td class="text-center align-middle">
                                        <div class="input-group input-group-sm">
                                            <input type="number" min="0" v-model.number="value.thue_vat" class="form-control text-center px-1" disabled>
                                            <span class="input-group-text px-1">%</span>
                                        </div>
                                    </td>
                                    <td class="text-end fw-bold align-middle text-nowrap">
                                        {{ (
                                            ((value.so_luong || 1) * value.don_gia - (value.giam_gia || 0))
                                            * (1 + (value.thue_vat || 0) / 100)
                                        ).toLocaleString('vi-VN') }} ₫
                                    </td>
                                    <td class="text-center align-middle">
                                        <button class="btn btn-outline-danger btn-sm" type="button" @click="remove(index)">
                                            <i class="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-md-7 d-flex align-items-center">
                            <div class="input-group flex-nowrap w-50 me-2 mt-1 mb-1">
                                <input type="text" class="form-control" v-model="noi_dung_tim_kiem" placeholder="Nhập mã KH..." />
                                <button class="btn btn-primary" type="button" @click="timKiem()">Tìm</button>
                            </div>
                            <div v-if="khach_hang" class="text-success fw-bold fs-6 ms-2 text-nowrap text-truncate">
                                Khách hàng: {{ khach_hang.ho_ten }}
                            </div>
                        </div>
                        <div class="col-md-5 d-flex justify-content-end align-items-center">
                            <span class="fw-bold me-3 text-nowrap">Tổng cộng: <span class="text-danger ms-1">
                                {{ list_chi_tiet.reduce((total, item) => total + ((item.so_luong * item.don_gia
                                            - (item.giam_gia || 0)) * (1 + (item.thue_vat || 0) / 100)), 0).toLocaleString('vi-VN') }} ₫
                            </span></span>
                            <button class="btn btn-primary text-nowrap">Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Panel Phải: DANH SÁCH SẢN PHẨM -->
        <div class="col-lg-5">
            <div class="card border-top border-0 border-4 border-primary shadow-sm mt-2">
                <div class="card-header">
                    <h5 class="card-title mb-0">Danh sách sản phẩm</h5>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <input class="form-control" type="search" v-model="tu_khoa"
                            placeholder="Nhập thông tin cần tìm và mã sản phẩm..." />
                    </div>
                    <div class="table-responsive border rounded">
                        <table class="table table-striped table-bordered table-hover align-middle mb-0">
                            <thead class="table-light text-center text-nowrap">
                                <tr>
                                    <th class="px-2">STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th class="px-2">ĐVT</th>
                                    <th class="text-end px-2">Đơn giá</th>
                                    <th class="px-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(sanPham, index) in locSanPham()" :key="index">
                                    <td class="text-center align-middle">{{ index + 1 }}</td>
                                    <td class="text-start align-middle fw-medium">{{ sanPham.ten_san_pham }}</td>
                                    <td class="text-center align-middle text-muted">{{ sanPham.don_vi_tinh }}</td>
                                    <td class="text-end align-middle">{{ sanPham.gia_ban_mac_dinh ? sanPham.gia_ban_mac_dinh.toLocaleString('vi-VN') : 0 }} ₫</td>
                                    <td class="text-center align-middle">
                                        <button class="btn btn-outline-primary btn-sm" type="button" @click="add(sanPham)">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="locSanPham().length === 0">
                                    <td colspan="5" class="text-center fst-italic text-secondary py-3">Không tìm thấy sản phẩm</td>
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
import axios from 'axios';

export default {
    data() {
        return {
            list_san_pham: [],
            list_hoa_don: [],
            hoaDon: {
                id: null,
                ten_san_pham: '',
                don_vi_tinh: '',
                gia_ban: '',
            },
            tu_khoa: '',
            list_chi_tiet: [],
            noi_dung_tim_kiem: '',
            khach_hang: '',
        }
    },
    created() {
        this.getSanPham();
    },
    methods: {
        getSanPham() {
            axios.get('http://127.0.0.1:8000/api/admin/san-pham')
                .then(Response => {
                    this.list_san_pham = Response.data.data;
                })
                .catch(err => {
                    console.log("Lỗi khi tải lên danh sách", err);
                })
        },
        locSanPham() {
            if (this.tu_khoa.trim() === "") {
                return this.list_san_pham;
            }
            let tu_khoa_lower = this.tu_khoa.toLowerCase();
            return this.list_san_pham.filter((item) => item.ten_san_pham.toLowerCase().includes(tu_khoa_lower));
        },
        add(value) {
            let itemIndex = this.list_chi_tiet.findIndex(item => item.id === value.id);
            if (itemIndex !== -1) {
                this.list_chi_tiet[itemIndex].so_luong += 1;
            } else {
                let newItem = { ...value };
                newItem.so_luong = 1;
                newItem.don_gia = value.gia_ban_mac_dinh;
                newItem.giam_gia = 0;
                newItem.thue_vat = 10;
                this.list_chi_tiet.push(newItem);
            }
        },
        remove(index) {
            this.list_chi_tiet.splice(index, 1);
        },
        timKiem() {
            var data = {
                noi_dung_tim_kiem: this.noi_dung_tim_kiem
            }
            axios.post('http://127.0.0.1:8000/api/admin/khach-hang/tim-kiem', data)
                .then(Response => {
                    if (Response.data.status && Response.data.data.length > 0) {
                        this.khach_hang = Response.data.data[0];
                        this.$toast.success(Response.data.message);
                    } else {
                        this.$toast.error("Không tìm thấy khách hàng");
                        this.khach_hang = '';
                    }
                })
                .catch(err => {
                    console.log("Lỗi khi tải lên danh sách", err);
                })
        }
    }
}
</script>
<style></style>