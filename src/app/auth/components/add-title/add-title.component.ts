import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {TitleService} from '../../../shared/services/title.service';
import {AlertService} from '../../../shared/services/alert.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.css']
})
export class AddTitleComponent implements OnInit {
  // @ts-ignore
  titleForm: FormGroup;
  loading = false;
  submitted = false;

  saved = false;

  save(): void {
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {

    if (!this.saved) {
      return window.confirm('Do you want leave this page? All data will be lost.');
    } else {
      return true;
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private titleService: TitleService
  ) {
  }

  ngOnInit(): void {
    this.titleForm = this.formBuilder.group({
      coverImg: ['', Validators.required],
      bgImg: ['', Validators.required],
      origTitle: ['', Validators.required],
      engTitle: ['', Validators.required],
      type: ['', [Validators.required]],
      author: ['', [Validators.required]],
      artist: ['', [Validators.required]],
      writer: ['', [Validators.required]],
      desc: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f(): any {
    return this.titleForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.titleForm.invalid) {
      return;
    }

    if (this.titleForm.value.type === 'Manga') {
      this.titleForm.value.coverImg = '../../../../assets/manga/' + this.titleForm.value.coverImg.replace(/^.*\\/, '');
      this.titleService.addToManga(this.titleForm.value).pipe(first())
        .subscribe(data => {
            this.alertService.success('Creating Title successful', true);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });

    } else if (this.titleForm.value.type === 'Manhwa') {
      this.titleForm.value.coverImg = '../../../../assets/manhwa/' + this.titleForm.value.coverImg.replace(/^.*\\/, '');
      this.titleService.addToManhwa(this.titleForm.value).pipe(first())
        .subscribe(data => {
            this.alertService.success('Creating Title successful', true);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });


    } else if (this.titleForm.value.type === 'Manhua') {
      this.titleForm.value.coverImg = '../../../../assets/manhua/' + this.titleForm.value.coverImg.replace(/^.*\\/, '');
      this.titleService.addToManhua(this.titleForm.value).pipe(first())
        .subscribe(data => {
            this.alertService.success('Creating Title successful', true);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });


    }

    this.loading = true;
    this.titleService.add(this.titleForm.value)
      .pipe(first())
      .subscribe(data => {
          this.alertService.success('Creating Title successful', true);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
