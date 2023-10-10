import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RewardsPage } from './rewards.page';

describe('RewardsPage', () => {
  let component: RewardsPage;
  let fixture: ComponentFixture<RewardsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RewardsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RewardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
