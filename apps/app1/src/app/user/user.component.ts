import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAttributes } from '@tomazgorenc/custom-models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  private httpClient = inject(HttpClient);

  users$: Observable<UserAttributes[]> = this.httpClient.get<UserAttributes[]>(
    'http://localhost:3000/users'
  );
}
