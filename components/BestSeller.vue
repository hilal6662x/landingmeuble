<template>
  <div class="row g-5 justify-content-center">
    <div class="col-md-6 col-lg-4" v-for="(data, i) in products">
      <div class="edu-course course-style-2 hover-button-bg-white">
        <div class="inner">
          <div class="thumbnail">
            <a href="course-details.html">
              <img :src="data.thumbnail ? data.thumbnail.img_url : ''" alt="Course Meta">
            </a>
            <div class="time-top">
              <span class="duration">#{{ i + 1 }}</span>
            </div>
          </div>
          <div class="content">
            <span class="course-level">{{ data.category.category }}</span>
            <h5 class="title">
              <a href="#">{{ data.nama }}</a>
            </h5>
            <div class="course-rating">
              <div class="rating">
                <i class="icon-23"></i>
                <i class="icon-23"></i>
                <i class="icon-23"></i>
                <i class="icon-23"></i>
                <i class="icon-23"></i>
              </div>
              <span class="rating-count">(5.0 /7 Rating)</span>
            </div>
            <div class="course-price">{{ convertMoney(data.harga) }}</div>
            <ul class="course-meta">
              <li><i class="icon-59"></i>{{ data.stock }}</li>
            </ul>
          </div>
        </div>
        <div class="course-hover-content-wrapper">
          <button class="wishlist-btn"><i class="icon-22"></i></button>
        </div>
        <div class="course-hover-content">
          <div class="content">
            <button class="wishlist-btn"><i class="icon-22"></i></button>
            <span class="course-level">{{ data.category.category }}</span>
            <h5 class="title">
              <a href="course-details.html">{{ data.nama }}</a>
            </h5>
            <div class="course-rating">
              <div class="rating">
                <i class="icon-23"></i>
                <i class="icon-23"></i>
                <i class="icon-23"></i>
                <i class="icon-23"></i>
                <i class="icon-23"></i>
              </div>
              <span class="rating-count">(5.0 /7 Rating)</span>
            </div>
            <div class="course-price">{{ convertMoney(data.harga) }}</div>
            <p>{{ data.deskripsi }}</p>
            <ul class="course-meta">
              <li><i class="icon-24"></i>{{ data.stock }}</li>
            </ul>
            <a href="https://drive.google.com/file/d/1nwYW4upkyWs-SX8ou6sNhrZFGjDs_V1R/view?usp=drivesdk" class="edu-btn btn-secondary btn-small">Order Sekarang <i
                class="icon-4"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useApi from '../utils/api';
const { getResource } = useApi();

const products = await getResource('/product/bestseller')

function convertMoney(money) {
  return money.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).slice(0, -3);
}
</script>