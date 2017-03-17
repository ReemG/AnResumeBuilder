import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { PersonalPhoto } from '../Model';

@Component({
    selector: 'app-personal-photo',
    templateUrl: './personal-photo.component.html',
    styleUrls: ['./personal-photo.component.css']
})
export class PersonalPhotoComponent implements OnInit {
    file_srcs: string;
    personalphoto: PersonalPhoto;

    constructor(private taskSevice: TaskService) {
        this.personalphoto = this.taskSevice.personalphoto;
    }

    ngOnInit() {
        this.found();
    }

    found(): void {
        if (this.personalphoto.personalPhoto !== "") {
            this.file_srcs = this.personalphoto.personalPhoto;
            var deleteimg = document.getElementById("profile-photo-delete");
            deleteimg.style.visibility = 'visible';
        }
        else {
            this.file_srcs = "resume img/profile.gif";
        }
    }

    deleteimage() {
        this.personalphoto.personalPhoto = "resume img/profile.gif";
        this.file_srcs = "resume img/profile.gif";
    }

    fileChange(input) {
        this.readFiles(input.files);
    }

    readFile(file, reader, callback) {
        reader.onload = () => {
            callback(reader.result);
        }

        reader.readAsDataURL(file);
    }

    readFiles(files, index = 0) {
        let reader = new FileReader();
        if (index in files) {
            this.readFile(files[index], reader, (result) => {
                var img = document.createElement("img");
                img.src = result;
                this.resize(img, 200, 200, (resized_jpeg, before, after) => {
                    this.file_srcs = resized_jpeg;
                    this.personalphoto.personalPhoto = this.file_srcs;
                    var deleteimg = document.getElementById("profile-photo-delete");
                    deleteimg.style.visibility = 'visible';
                    this.readFiles(files, index + 1);
                });
            });
        }
    }

    resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
        return img.onload = () => {
            var width = img.width;
            var height = img.height;
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            var dataUrl = canvas.toDataURL('image/jpeg');
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    }

}
