<template>
  <div class="counterup-area-5 edu-section-gap">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-3 col-sm-6">
          <div class="edu-counterup counterup-style-5 primary-color">
            <h2 class="counter-item count-number">
              <span>{{ data.total_user }}</span>
            </h2>
            <h6 class="title">Pelanggan</h6>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="edu-counterup counterup-style-5 secondary-color">
            <h2 class="counter-item count-number">
              <span>{{ data.total_category }}</span>
            </h2>
            <h6 class="title">Kategori</h6>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="edu-counterup counterup-style-5 extra02-color">
            <h2 class="counter-item count-number">
              <span>{{ data.total_product }}</span>
            </h2>
            <h6 class="title">Produk</h6>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="edu-counterup counterup-style-5 extra05-color">
            <h2 class="counter-item count-number">
              <span>{{ data.total_payment }}</span>
            </h2>
            <h6 class="title">Jenis Pembayaran</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import useApi from '../utils/api';
  const { getResource } = useApi();
  const data:any = await getResource('/landing_page');
</script>