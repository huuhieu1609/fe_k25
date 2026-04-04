import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [

    {
        path: '/admin/nhan-vien',
        component: () => import('../components/Admin/NhanVien/index.vue')
    },
    {
        path: '/admin/chuc-vu',
        component: () => import('../components/Admin/ChucVu/index.vue')
    },
    {
        path: '/admin/khach-hang',
        component: () => import('../components/Admin/KhachHang/index.vue')
    },
    {
        path: '/admin/ca-lam-viec',
        component: () => import('../components/Admin/CaLamViec/index.vue')
    },
    {
        path: '/admin/nha-cung-cap',
        component: () => import('../components/Admin/NhaCungCap/index.vue')
    },
    {
        path: '/admin/khuyen-mai',
        component: () => import('../components/Admin/KhuyenMai/index.vue')
    },
    {
        path: '/admin/san-pham',
        component: () => import('../components/Admin/SanPham/index.vue')
    },
    {
        path: '/admin/phieu-nhap',
        component: () => import('../components/Admin/PhieuNhap/index.vue')
    },
    {
        path: '/admin/chuc-nang',
        component: () => import('../components/Admin/ChucNang/index.vue')
    },
    {
        path: '/admin/cong-no-nha-cung-cap',
        component: () => import('../components/Admin/CongNoNhaCungCap/index.vue')
    },
    {
        path: '/admin/hoa-don',
        component: () => import('../components/Admin/HoaDon/index.vue')
    },
    {
        path: '/admin/phan-quyen',
        component: () => import('../components/Admin/PhanQuyen/index.vue')
    },
    {
        path: '/admin/loai-san-pham',
        component: () => import('../components/Admin/LoaiSanPham/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router