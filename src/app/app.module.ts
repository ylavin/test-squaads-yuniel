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
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import { LeagueDetailsComponent } from './modules/league/league-details/league-details.component';
import {LeaguePageRoutingModule} from "./modules/league/league-page-routing.module";
import {SplitterModule} from 'primeng/splitter';
import { PlayerDetailsComponent } from './modules/player/player-details/player-details.component';
import {PlayerPageRoutingModule} from "./modules/player/player-page-routing.module";
import { TeamDetailsComponent } from './modules/team/team-details/team-details.component';
import {TeamPageRoutingModule} from "./modules/team/team-page-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    LeagueListComponent,
    MenuBarComponent,
    TableComponent,
    PlayerListComponent,
    TeamListComponent,
    LeagueDetailsComponent,
    PlayerDetailsComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
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
    BrowserAnimationsModule,
    MultiSelectModule,
    DropdownModule,
    LeaguePageRoutingModule,
    SplitterModule,
    PlayerPageRoutingModule,
    TeamPageRoutingModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
