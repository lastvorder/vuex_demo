<template>
  <div class="home">
    <el-table
      :data="pageInfo.list"
      border
      stripe
      style="width:500px"
      height="300px"
    >
      <el-table-column prop="id" label="编号"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageNum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total"
    >
    </el-pagination>
    <!-- <button @click="increment">加</button> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  created: function() {
    this.$request({
      method: "get",
      url: "students",
      params: this.queryInfo
    }).then(res => {
      this.pageInfo = res.data;
    });
  },
  data() {
    return {
      queryInfo: {
        pageNum: 1,
        pageSize: 5
      },
      pageInfo: {}
    };
  },
  watch: {
    queryInfo: {
      handler() {
        this.listStudent();
      },
      deep: true
    }
  },
  methods: {
    handleSizeChange(val) {
      this.queryInfo.pageSize = val;
      this.queryInfo.pageNum = 1;
    },
    handleCurrentChange(val) {
      this.queryInfo.pageNum = val;
    },
    listStudent() {
      this.$request({
        method: "get",
        url: "students",
        params: this.queryInfo
      }).then(res => {
        this.pageInfo = res.data;
      });
    }
  }
};
</script>
<style>
.el-table {
  margin: 0 auto;
}
.el-pagination {
  margin: 20px auto;
}
</style>
