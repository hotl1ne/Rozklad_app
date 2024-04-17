import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/interfaces/IUser.module';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{

  user: UserModel = {
    id: '',
    login: '',
    password: '',
    name: '',
    phone: '',
    faculty: '',
    course: '',
    group: '',
    cafedra: ''
  };

  ngOnInit(): void {
    this.getUser();
    const storedImageURL = localStorage.getItem('previewImageURL');
    if (storedImageURL) {
      this.imageURL = storedImageURL;
    }
  }

  imageURL: string | ArrayBuffer | null = "/assets/profile.png"

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result;
        localStorage.setItem('previewImageURL', this.imageURL as string);
      };
      reader.readAsDataURL(file);
    }
  }

  private getUser()
  {
    const finduser = localStorage.getItem("user");
    if(finduser)
    {
      this.user = JSON.parse(finduser);
    }
  }
}
