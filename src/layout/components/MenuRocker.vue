<template>
  <div class="nav-container primary-menu">
    <div class="mobile-topbar-header">
      <div>
        <img
          src="assets/images/logo-icon.png"
          class="logo-icon"
          alt="logo icon"
        />
      </div>
      <div>
        <h4 class="logo-text">Rukada</h4>
      </div>
      <div class="toggle-icon ms-auto"><i class="bx bx-arrow-to-left"></i></div>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
      <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
        <li class="nav-item dropdown">
          <a
            href="javascript:;"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
            data-bs-toggle="dropdown"
          >
            <div class="parent-icon"><i class="bx bx-home-circle"></i></div>
            <div class="menu-title">Dashboard</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="index.html"
                ><i class="bx bx-right-arrow-alt"></i>Default</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="index2.html"
                ><i class="bx bx-right-arrow-alt"></i>Alternate</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="index3.html"
                ><i class="bx bx-right-arrow-alt"></i>Graphical</a
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <router-link
            to="/admin/chuc-vu"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
          >
            <div class="parent-icon"><i class="bx bx-id-card"></i></div>
            <div class="menu-title">Quản Lý Chức Vụ</div>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link
            to="/admin/chuc-nang"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
          >
            <div class="parent-icon"><i class="bx bx-shield-quarter"></i></div>
            <div class="menu-title">Quản Lý Chức Năng</div>
          </router-link>
        </li>

        <li class="nav-item dropdown">
          <a
            href="javascript:;"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
            data-bs-toggle="dropdown"
          >
            <div class="parent-icon"><i class="bx bx-user-pin"></i></div>
            <div class="menu-title">Quản lý đối tác</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/admin/nhan-vien" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Quản lý nhân viên
              </router-link>
            </li>
            <li>
              <router-link to="/admin/khach-hang" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Quản lý khách hàng
              </router-link>
            </li>
            <li>
              <router-link to="/admin/nha-cung-cap" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Quản lý nhà cung cấp
              </router-link>
            </li>
            <li>
              <router-link
                to="/admin/cong-no-nha-cung-cap"
                class="dropdown-item"
              >
                <i class="bx bx-right-arrow-alt"></i>Quản lý công nợ NCC
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <router-link
            to="/admin/ca-lam-viec"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
          >
            <div class="parent-icon"><i class="bx bx-history"></i></div>
            <div class="menu-title">Quản lý ca làm việc</div>
          </router-link>
        </li>

        <li class="nav-item dropdown">
          <a
            href="javascript:;"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
            data-bs-toggle="dropdown"
          >
            <div class="parent-icon"><i class="bx bx-package"></i></div>
            <div class="menu-title">Quản lý sản phẩm</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/admin/san-pham" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Danh sách sản phẩm
              </router-link>
            </li>
            <li>
              <router-link to="/admin/loai-san-pham" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Quản lý loại sản phẩm
              </router-link>
            </li>
            <li>
              <router-link to="/admin/khuyen-mai" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Quản lý khuyến mãi
              </router-link>
            </li>
            <li>
              <router-link to="/admin/phieu-nhap" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Quản lý phiếu nhập
              </router-link>
            </li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a
            href="javascript:;"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
            data-bs-toggle="dropdown"
          >
            <div class="parent-icon"><i class="bx bx-package"></i></div>
            <div class="menu-title">Hoá đơn</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/admin/hoa-don" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Tạo hoá đơn
              </router-link>
            </li>
            <li>
              <router-link to="/admin/quan-ly-hoa-don" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Quản lý hoá đơn
              </router-link>
            </li>
            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <router-link
            to="/admin/phan-quyen"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
          >
            <div class="parent-icon"><i class="bx bx-key"></i></div>
            <div class="menu-title">Phân Quyền</div>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            href="javascript:;"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret"
            data-bs-toggle="dropdown"
          >
            <div class="parent-icon"><i class="bx bx-store-alt"></i></div>
            <div class="menu-title">Quản lý kho</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/admin/kho" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Danh sách kho
              </router-link>
            </li>
            <li>
              <router-link to="/admin/ton-kho" class="dropdown-item">
                <i class="bx bx-right-arrow-alt"></i>Số lượng tồn kho
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
