import { Component, OnDestroy, OnInit } from '@angular/core';
import { GitUser } from "../../interfaces/git";
import { GitService } from "../../services/git.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.scss']
})
export class GitUsersComponent implements OnInit, OnDestroy {
  usersList: GitUser[] = [];
  private scrollListener: undefined | (() => void);
  private sinceId: number = 0;
  private limit: number = 20;
  private gitSubscriber: undefined | Subscription;

  constructor(private gitService: GitService) {
  }

  ngOnInit() {
    this.loadUsers();

    this.scrollListener = () => {
      this.listenScrollEvent();
    }

    document.addEventListener("scroll", this.scrollListener);
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      document.removeEventListener('scroll', this.scrollListener);
    }

    if (this.gitSubscriber) {
      this.gitSubscriber.unsubscribe();
    }
  }


  private listenScrollEvent(): void {
    const html = document.documentElement;

    if (window.scrollY + html.clientHeight >= html.scrollHeight) {
      this.loadUsers();
    }
  }

  loadUsers() {
    this.gitSubscriber = this.gitService.getUsersList(this.sinceId, this.limit)
      .subscribe((data: GitUser[]) => {
        this.usersList.push(...data);
        this.sinceId = data[data.length - 1].id;
      });
    this.limit = 10;
  }
}
