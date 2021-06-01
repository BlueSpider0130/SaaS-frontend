  <template>
    <div class="hidden">
      <vs-sidebar absolute hover-expand reduce :value="side_state" background="#59C7F1" text-white open>

        <template #logo>
          <!-- ...img logo -->
          <img :src="logo">
        </template>
        <vs-sidebar-item id="dashboard" to="/dashboard-page">
          <template #icon>
            <i class="fas fa-tachometer-alt"></i>
          </template>
          Dashboard
        </vs-sidebar-item>
        <vs-sidebar-item id="products" to="/products-page">
          <template #icon>
            <i class="fas fa-file-powerpoint"></i>
          </template>
          Products
        </vs-sidebar-item>
        <vs-sidebar-item id="marketing">
          <template #icon>
            <i class="fas fa-comment-dollar"></i>
          </template>
          Marketing
        </vs-sidebar-item>
        <vs-sidebar-item id="analytics">
          <template #icon>
            <i class="fas fa-chart-pie"></i>
          </template>
          Analytics
        </vs-sidebar-item>
        <vs-sidebar-item id="reports">
          <template #icon>
            <i class="fas fa-flag-checkered"></i>
          </template>
          Reports
        </vs-sidebar-item>
        <vs-sidebar-item id="settings" to="/setting-page">
          <template #icon>
            <i class="fas fa-user-cog"></i>
          </template>
          Settings
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
  </template>

<script>
    import logoImg from '../../assets/images/logo.png'
    import onlylogo from '../../assets/images/onlylogo.png'
    import "../../assets/css/sidebar.css";
    import { mapGetters } from 'vuex'
    
export default {
  name: 'Sidebar',
  computed: mapGetters({
    side_state: 'get',
  }),
  data () {
    return {
        logo: logoImg,
        onlylogo: onlylogo,
        notExpand: false,
        reduce: true,
    }
  },
}
</script>


  