import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityServiceMock } from '../../../../tests/api/security.service.mock';
import { AboutServiceMock } from '../../../../tests/api/about.service.mock';
import { NotificationServiceMock } from '../../../../tests/service/notification.service.mock';
import { RuntimeServiceMock } from '../../../../tests/api/runtime.service.mock.spec';
import { GrafanaServiceMock } from '../../../../tests/service/grafana.service.mock';
import { ContextService } from '../../../../shared/service/context.service';
import { BuilderComponent } from './builder.component';
import { StreamServiceMock } from '../../../../tests/api/stream.service.mock';
import { StreamDeployServiceMock } from '../../../../tests/service/stream-deploy.service.mock';
import { ConfirmComponent } from '../../../../shared/component/confirm/confirm.component';
import { RoleDirective } from '../../../../security/directive/role.directive';

describe('streams/deploy/builder/builder.component.ts', () => {
  let component: BuilderComponent;
  let fixture: ComponentFixture<BuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuilderComponent,
        RoleDirective
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ClarityModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
      ],
      providers: [
        SecurityServiceMock.provider,
        AboutServiceMock.provider,
        NotificationServiceMock.provider,
        RuntimeServiceMock.provider,
        GrafanaServiceMock.provider,
        StreamServiceMock.provider,
        StreamDeployServiceMock.provider,
        ContextService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderComponent);
    component = fixture.componentInstance;
    NotificationServiceMock.mock.clearAll();
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
