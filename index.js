(function(window) {
   const JpgToPngConvertor = (() => {
     function convertor(imageFileBlob, options) {
       options = options || {};
       const defaults = {
         downloadLinkSelector: '.js-download-png'
       };
       const settings = extend(defaults, options);
       const canvas = document.createElement('canvas');
       const ctx = canvas.getContext("2d");
       const imageEl = createImage();
       const downloadLink = settings.downloadEl || createDownloadLink();

       function createImage(options) {
         options = options || {};
         const img = (Image) ? new Image() : document.createElement('img');
         const parent = options.parentEl || document.body;
         img.style.width = (options.width) ? options.width + 'px' : 'auto';
         img.style.height = (options.height) ? options.height + 'px' : 'auto';
         return img;
       }

       function extend(target, source) {
         for (let propName in source) {
           if (source.hasOwnProperty(propName)) {
             target[propName] = source[propName];
           }
         }
         return target;
       }

       function createDownloadLink() {
         return document.createElement('a');
       }

       function isFirefox() {
         return navigator.userAgent.indexOf("Firefox") > -1;
       }

       function download() {
         // Add download link to DOM in case it is not there and on the firefox
         if (!document.contains(downloadLink) && isFirefox()) {
           downloadLink.style.display = 'none';
           document.body.appendChild(downloadLink);
         }
         if ('click' in downloadLink) {
           downloadLink.click();
         } else {
           downloadLink.dispatchEvent(createClickEvent());
         }
       }

       function updateDownloadLink(jpgFileName, pngBlob) {
         const linkEl = downloadLink;
         const pngFileName = jpgFileName.replace(/jpe?g/i, 'png');
         linkEl.setAttribute('download', pngFileName);
         linkEl.href = window.URL.createObjectURL(pngBlob);
         // If there is custom download link we don't download automatically
         if (settings.downloadEl) {
           settings.downloadEl.style.display = 'block';
         } else {
           download();
         }
       }

       function createClickEvent() {
         if ('MouseEvent' in window) {
           return new MouseEvent('click');
         } else {
           const evt = document.createEvent("MouseEvents");
           evt.initMouseEvent("click", true, true, window);
           return evt;
         }
       }

       function process() {
         const imageUrl = window.URL.createObjectURL(imageFileBlob);
         imageEl.onload = (e) => {
           canvas.width = e.target.width;
           canvas.height = e.target.height;
           ctx.drawImage(e.target, 0, 0, e.target.width, e.target.height);
           canvas.toBlob(updateDownloadLink.bind(window, imageFileBlob.name), 'image/png', 1);
         };
         imageEl.src = imageUrl;
         if (settings.downloadEl) {
           settings.downloadEl.style.display = 'none';
         }
       }
       return {
         process: process
       };
     }
     return convertor;
   })();
   const imageFileEl = document.querySelector('[name="image"]');
   imageFileEl.addEventListener('change', (event) => {
     const jpgImageFileBlob = event.currentTarget.files[0];
     // Validate
     if (jpgImageFileBlob.type.match(/image\/jpe?g/i) !== null) {
       JpgToPngConvertor(jpgImageFileBlob).process();
     } else {
       alert('Invalid JPG image file');
     }
   }, false);
 })(window);