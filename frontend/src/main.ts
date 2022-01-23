import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// ?mport { store } from './store'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'       //core css
import 'primeicons/primeicons.css'       //icons
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import BlockUI from 'primevue/blockui'
import Button from 'primevue/button'
import Breadcrumb from 'primevue/breadcrumb'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import CascadeSelect from 'primevue/cascadeselect'
import Carousel from 'primevue/carousel'
import Checkbox from 'primevue/checkbox'
import Chip from 'primevue/chip'
import Chips from 'primevue/chips'
import ColorPicker from 'primevue/colorpicker'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmPopup from 'primevue/confirmpopup'
import ContextMenu from 'primevue/contextmenu'
import DataTable from 'primevue/datatable'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import DeferredContent from 'primevue/deferredcontent'
import Dialog from 'primevue/dialog'
import Divider from 'primevue/divider'
import Dropdown from 'primevue/dropdown'
import Fieldset from 'primevue/fieldset'
import FileUpload from 'primevue/fileupload'
import InlineMessage from 'primevue/inlinemessage'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import Knob from 'primevue/knob'
import Listbox from 'primevue/listbox'
import MegaMenu from 'primevue/megamenu'
import Menu from 'primevue/menu'
import Menubar from 'primevue/menubar'
import Message from 'primevue/message'
import MultiSelect from 'primevue/multiselect'
import OrderList from 'primevue/orderlist'
import OrganizationChart from 'primevue/organizationchart'
import OverlayPanel from 'primevue/overlaypanel'
import Paginator from 'primevue/paginator'
import Panel from 'primevue/panel'
import PanelMenu from 'primevue/panelmenu'
import Password from 'primevue/password'
import PickList from 'primevue/picklist'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import Rating from 'primevue/rating'
import RadioButton from 'primevue/radiobutton'
import Row from 'primevue/row'
import SelectButton from 'primevue/selectbutton'
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop'
import Slider from 'primevue/slider'
import Sidebar from 'primevue/sidebar'
import SplitButton from 'primevue/splitbutton'
import Toast from 'primevue/toast'
import Tag from 'primevue/tag'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

// import { initValidationInterceptor } from '@/interseptors'

// initValidationInterceptor(store)

const app = createApp(App)
// app.use(PrimeVue)
// app.use(store)
app.use(router)
app.use(ToastService)
app.use(PrimeVue)
    .component('BlockUI', BlockUI)
    .component('TabView', TabView)
    .component('TabPanel', TabPanel)
    // .component('Chart', Chart)
    .directive('tooltip', Tooltip)
    .component('Breadcrumb', Breadcrumb)
    .component('Button', Button)
    .component('Calendar', Calendar)
    .component('Tag', Tag)
    .component('Card', Card)
    .component('Carousel', Carousel)
    .component('CascadeSelect', CascadeSelect)
    .component('Checkbox', Checkbox)
    .component('Chip', Chip)
    .component('Chips', Chips)
    .component('ColorPicker', ColorPicker)
    .component('Column', Column)
    .component('ColumnGroup', ColumnGroup)
    .component('ConfirmDialog', ConfirmDialog)
    .component('ConfirmPopup', ConfirmPopup)
    .component('ContextMenu', ContextMenu)
    .component('DataTable', DataTable)
    .component('DataView', DataView)
    .component('DataViewLayoutOptions', DataViewLayoutOptions)
    .component('DeferredContent', DeferredContent)
    .component('Dialog', Dialog)
    .component('Divider', Divider)
    .component('Dropdown', Dropdown)
    .component('Fieldset', Fieldset)
    .component('FileUpload', FileUpload)
    .component('InlineMessage', InlineMessage)
    .component('InputMask', InputMask)
    .component('InputNumber', InputNumber)
    .component('InputSwitch', InputSwitch)
    .component('InputText', InputText)
    .component('Knob', Knob)
    .component('Listbox', Listbox)
    .component('MegaMenu', MegaMenu)
    .component('Menu', Menu)
    .component('Menubar', Menubar)
    .component('Message', Message)
    .component('MultiSelect', MultiSelect)
    .component('OrderList', OrderList)
    .component('OrganizationChart', OrganizationChart)
    .component('OverlayPanel', OverlayPanel)
    .component('Paginator', Paginator)
    .component('Panel', Panel)
    .component('PanelMenu', PanelMenu)
    .component('Password', Password)
    .component('PickList', PickList)
    .component('ProgressBar', ProgressBar)
    .component('ProgressSpinner', ProgressSpinner)
    .component('RadioButton', RadioButton)
    .component('Rating', Rating)
    .component('Row', Row)
    .component('SelectButton', SelectButton)
    .component('ScrollPanel', ScrollPanel)
    .component('ScrollTop', ScrollTop)
    .component('Slider', Slider)
    .component('Sidebar', Sidebar)
    .component('SplitButton', SplitButton)
    .component('Toast', Toast)

app.mount('#app')
