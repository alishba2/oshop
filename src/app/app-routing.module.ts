import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path:'shopping-cart', component:ShoppingCartComponent},
  {path: 'checkout', component:CheckoutPageComponent},
  {path: 'order-success', component:OrderSuccessComponent},
  {path:'login' , component:LoginComponent},
  {path:'admin/products', component:AdminProductsComponent},
  {path: 'admin/order' , component:AdminOrdersComponent},
  {path: 'my/orders' , component:MyOrderComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[HomeComponent,ProductsComponent,ShoppingCartComponent,CheckoutPageComponent,OrderSuccessComponent,LoginComponent,AdminProductsComponent,AdminOrdersComponent]
