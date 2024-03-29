import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconModule } from './components/icon/icon.module';
import { NavComponent } from './components/nav/nav.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { ApiModule } from 'src/libs/api';
import { FooterComponent } from './components/footer/footer.component';
import { JwtInterceptor } from 'src/libs/auth/src/jwt.interceptor';

export function tokenGetter(): string | null {
	return localStorage.getItem('ACCESS_TOKEN_KEY');
}

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		IconModule,
		GraphQLModule,
		HttpClientModule,
		ApiModule,
		JwtModule.forRoot({
			config: {
				tokenGetter,
			}
		})
	],
	providers: [
		...environment.providers,
		JwtInterceptor
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
