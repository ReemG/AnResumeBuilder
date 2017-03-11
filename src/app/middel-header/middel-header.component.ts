import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middel-header',
  templateUrl: './middel-header.component.html',
  styleUrls: ['./middel-header.component.css']
})
export class MiddelHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  localstorageImages(ids, version) {

    var elements = ids,
        path = '/assets/img/home-page/',
        isIE = navigator.userAgent.match(/MSIE\s(?!9.0)/),
        image,
        storageFiles,
        storageFilesVersion,
        version;

    for (var i = 0, il = elements.length; i < il; i++) {

        image = document.getElementById(elements[i]);

        if (isIE && isIE !== null ) {
            // set image src
            image.src = (path + elements[i] + ".png?" + Number(new Date()));
        } else {

            storageFiles = JSON.parse(localStorage.getItem("storageFiles" + (i + 1))) || {},
            storageFilesVersion = storageFiles.version,
            version = version || 1;

            if (typeof storageFilesVersion === "undefined" || storageFilesVersion < version) {

                // set image src
                image.setAttribute("src", path + elements[i] + ".png?" + Number(new Date()));

                (function (i) {
                    // when the image has loaded
                    image.addEventListener("load", function () {
                        var imgCanvas = document.createElement("canvas"),
                            imgContext = imgCanvas.getContext("2d"),
                            imgW = this.width,
                            imgH = this.height;

                        // canvas size = image size
                        imgCanvas.width = imgW;
                        imgCanvas.height = imgH;

                        // draw image
                        imgContext.drawImage(this, 0, 0, imgW, imgH);

                        // image to base64
                        storageFiles.image = imgCanvas.toDataURL("image/png");

                        // version for localStorage
                        storageFiles.version = version;

                        // save as JSON
                        localStorage.setItem("storageFiles" + (i + 1), JSON.stringify(storageFiles));
                    });
                })(i);
            } else {
                // image from localStorage
                image.setAttribute("src", storageFiles.image);
            }
        }
    }
}

 
}
