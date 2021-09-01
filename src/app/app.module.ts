import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {MenubarModule} from 'primeng/menubar';
import {LeagueListComponent} from './modules/league/league-list/league-list.component';
import {LeagueFormComponent} from './modules/league/league-form/league-form.component';
import {MenuBarComponent} from './core/components/menu-bar/menu-bar.component';
import {TableComponent} from './core/components/table/table.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from "@angular/common/http";
import {PlayerListComponent} from './modules/player/player-list/player-list.component';
import {TeamListComponent} from './modules/team/team-list/team-list.component';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import {AvatarModule} from 'primeng/avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    LeagueListComponent,
    LeagueFormComponent,
    MenuBarComponent,
    TableComponent,
    PlayerListComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'leagues', component: LeagueListComponent},
      {path: 'players', component: PlayerListComponent},
      {path: 'teams', component: TeamListComponent},
    ]), CardModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    ConfirmDialogModule,
    CommonModule,
    FormsModule,
    DialogModule,
    ContextMenuModule,
    AvatarModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
