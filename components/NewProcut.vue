<template>
  <div class="edu-blog-area blog-area-2 svg-image--2 bg-image gap-bottom-equal">
    <div class="container">
      <div class="section-title section-center">
        <span class="pre-title">Produk yang baru saja kami buat</span>
        <h2 class="title"> Produk <span class="color-secondary">Terbaru</span></h2>
        <span class="shape-line"><i class="icon-19"></i></span>
      </div>
      <div class="row g-5">
        <div class="col-lg-4 col-md-6 col-12" v-for="(item) in data">
          <div class="edu-blog blog-style-1">
            <div class="inner">
              <div class="thumbnail">
                <a href="https://drive.google.com/file/d/1nwYW4upkyWs-SX8ou6sNhrZFGjDs_V1R/view?usp=drivesdk">
                  <img :src="data.thumbnail ? data.thumbnail.img_url : ''" alt="Blog Images">
                </a>
              </div>
              <div class="content position-top">
                <div class="read-more-btn">
                  <a class="btn-icon-round" href="https://drive.google.com/file/d/1nwYW4upkyWs-SX8ou6sNhrZFGjDs_V1R/view?usp=drivesdk"><i class="icon-4"></i></a>
                </div>
                <div class="category-wrap">
                  <a href="#" class="blog-category">{{ item.category.category }}</a>
                </div>
                <h5 class="title"><a href="https://drive.google.com/file/d/1nwYW4upkyWs-SX8ou6sNhrZFGjDs_V1R/view?usp=drivesdk">{{ item.nama }}</a></h5>
                <ul class="blog-meta">
                  <li><i class="icon-27"></i>{{ convertDate(item.createdAt) }}</li>
                  <li><i class="icon-59"></i>{{ item.stock }}</li>
                </ul>
                <p>{{ item.deskripsi }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="shape-group">
      <li class="shape-1">
        <img src="/assets/images/about/shape-25.png" alt="Shape">
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import useApi from '../utils/api';
  const { getResource } = useApi();
  const data:any = await getResource('/landing_page/newProduct');
  function convertDate(date: string) {
    const d = new Date(date);
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;

  }
</script>