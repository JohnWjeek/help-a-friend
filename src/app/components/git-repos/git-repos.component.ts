import { Component, OnDestroy, OnInit } from '@angular/core';
import { GitService } from "../../services/git.service";
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.scss']
})
export class GitReposComponent implements OnInit, OnDestroy {

  usersRepos$: undefined | Observable<any>;
  private paramsSubscriber: undefined | Subscription;

  constructor(private gitService: GitService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramsSubscriber = this.route.paramMap.subscribe((params: ParamMap) => {
      const username = params.get('username');
      if (username) {
        this.usersRepos$ = this.gitService.getUsersRepos(username);
      }
    });
  }

  ngOnDestroy() {
    if (this.paramsSubscriber) {
      this.paramsSubscriber.unsubscribe();
    }
  }

}
