var fs = require('fs');

fs.readFile('./lineage.json', (req, json) => {
  var file = '<section id="cd-timeline" class="cd-container">'
  json = JSON.parse(json.toString());
  json.forEach((line) => {

    var html = html1(line) + html2(line.info) + html3(line);
    file += html;
  })
    fs.writeFile('./~kappachi/lineage/index.html', header + file + '</section> <!-- cd-timeline -->' + footer, (err, res)=> {
      if(!err) console.log('\nSuccess: Lineage has been Updated');
    })
});



const footer = `

  <!-- End Main Wrapper -->

  <!-- Start of Footer -->
  <footer id="footer" class="mtp">


    <!-- Start of Footer 2 -->
    <section class="footer_2">
      <section class="container-fluid container">
        <section class="row-fluid">

        </section>
      </section>
    </section>
    <!-- End of Footer 2 -->

    <!-- Start of Footer 3 -->
    <section class="footer_3">
      <section class="container-fluid container">
        <section class="row-fluid">

          <figure class="col-sm-6 footer_left">

            <ul class="footer_nav">
              <li><a href="/~kappachi/index.html">Home<span class="sr-only">(current)</span></a></li>
              <li><a href="/~kappachi/fraternity/index.html">The Fraternity<span class="sr-only"></span></a></li>
              <li><a href="/~kappachi/chapter/index.html">The Chapter<span class="sr-only"></span></a></li>
              <li><a href="/~kappachi/programs/index.html">Programs</a></li>
              <li><a href="index">Lineage</a></li>
              <li><a href="/~kappachi/membership/index.html">Membership</a></li>
            </ul>

          </figure>


          <figure class="col-sm-4 text-right">
            <table class="table">
              <caption class="text-center">Get in Touch!</caption>
              <tr>
                <td> <a href="https://twitter.com/sigmas_kx" class="s5"> Twitter</a> </td>
                <td> <a href="https://www.instagram.com/utk_sigmas/" class="s2"> Instagram</a> </td>
                <td> <a href="https://www.facebook.com/Kappa-Chi-Chapter-of-Phi-Beta-Sigma-161772227266905/?fref=ts" class="s1"> Facebook</a> </td>
                <td> <a href="mailto:kappachi1979@gmail.com" class="s1"> Email</a> </td>
              </tr>
            </table>
          </figure>
        </section>
      </section>
    </section>
    <!-- End of Footer 3 -->

  </footer>
  <!-- End of Footer -->
</div>
  

  <!-- JS Files Start -->
  <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
    crossorigin="anonymous"></script>
  <script type="text/javascript" src="/~kappachi/js/modernizr.js"></script>
  <!-- Modernizr -->
  <script type="text/javascript" src="/~kappachi/js/easing.js"></script>
  <!-- Easing js -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>
  <script type="text/javascript" src="/~kappachi/js/bxslider.js"></script>
  <!-- BX Slider -->
  <script type="text/javascript" src="/~kappachi/js/fitvids.js"></script>
  <!-- fIt Video -->
  <script type="text/javascript" src="/~kappachi/js/clearInput.js"></script>
  <!-- Input Clear -->
  <script type="text/javascript" src="/~kappachi/js/smooth-scroll.js"></script>
  <!-- smooth Scroll -->
  <script type="text/javascript" src="/~kappachi/js/prettyPhoto.js"></script>
  <!-- Pretty Photo -->
  <script type="text/javascript" src="/~kappachi/js/social.js"></script>
  <!-- Social Media Hover Effect -->
  <script type="text/javascript" src="/~kappachi/js/countdown.js"></script>
  <!-- Event Counter -->
  <script type="text/javascript" src="/~kappachi/js/custom.js"></script>
  <!-- Custom / Functions -->
  <!--[if IE 8]>
     <script src="/~kappachi/js/ie8_fix_maxwidth.js" type="text/javascript"></script>
<![endif]-->


</body>

</html>
`


const header = `
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
  <title>Lineage | The Kappa Chi Chapter of Phi Beta Sigma Fraternity, Inc | University of Tennessee Knoxville</title>
  <!-- Browser Tab Icon-->
  <link rel="icon" type="image/png" href="/~kappachi/images/chapter_logo.png">
  <meta name="description" content="Local chapter of Phi Beta Sigma. Uplifiting the Knoxville community through empowerment and excellence since 1979." >
  <!--[if lt IE 9]>
	<script src="/~kappachi/js/html5shiv.js"></script>
<![endif]-->
  <!--[if lt IE 9]>
	<script src="/~kappachi/js/mq.js"></script>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <meta charset="UTF-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <meta name="viewport" content="width=device-width">
  <!-- Css Files Start -->
  <link href="/~kappachi/css/style.css" rel="stylesheet" type="text/css" />
  <!-- All css -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous">
  <!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="/~kappachi/css/customIE.css" /><![endif]-->
  <link href="/~kappachi/css/font-awesome.css" rel="stylesheet" type="text/css" />
  <!-- Font Awesome Css -->
  <link href="/~kappachi/css/font-awesome-ie7.css" rel="stylesheet" type="text/css" />
  <!-- Font Awesome iE7 Css -->
  <!-- Css Files End -->
  <link href="https://fonts.googleapis.com/css?family=Allura|Raleway" rel="stylesheet">
  <!-- Social Icons no JS -->
  <noscript>
    <link rel="stylesheet" type="text/css" href="/~kappachi/css/nj.css" />
  </noscript>
  <!-- Social Icons no JS -->

  <!-- Color Switcher -->
  <link href="/~kappachi/css/switcher.css" rel="stylesheet" type="text/css" />
  <!--Skin -->
  <link rel="stylesheet" id="skins" href="/~kappachi/css/default.css" type="text/css" media="all">
  <!-- skins -->
  <!-- end of Color Switcher -->

  <style>
/* Lineage Header Styles */
.lineage-header {
  background: linear-gradient(135deg, #1453a0 0%, #026ec6 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
}

.lineage-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgba(255, 255, 255, 0.03) 50px,
      rgba(255, 255, 255, 0.03) 51px
    );
  opacity: 0.5;
}

.lineage-title {
  font-size: 3.5em;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

.lineage-subtitle {
  font-size: 1.3em;
  color: rgba(255, 255, 255, 0.95);
  position: relative;
  z-index: 1;
  font-style: italic;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .lineage-title {
    font-size: 2.5em;
    letter-spacing: 2px;
  }
  
  .lineage-subtitle {
    font-size: 1.1em;
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .lineage-header {
    padding: 40px 15px;
  }
  
  .lineage-title {
    font-size: 2em;
  }
  
  .lineage-subtitle {
    font-size: 1em;
  }
}
</style>

</head>

<body>
  <!-- Start Main Wrapper -->
  <div class="wrapper">
    <!-- Start of Header -->
    <header>
      <!-- Start Main Header -->

      <section class="logo_container">
        <section class="container-fluid container">
          <section class="row-fluid">
            <section class="col-sm-4 text-center" style="margin-top:11px">
              <p class="title title-sans center"><a href="/~kappachi/index.html"><strong>Kappa Chi Chapter of</strong></a></p>
              <p class="title title-sans center"><a href="/~kappachi/index.html"><strong> Phi Beta Sigma Fraternity Inc</strong></bold></a></p>
            </section>
            <section class="col-sm-4">
              <img style="width: 100px; max-height: 100px" class="center" src="/~kappachi/images/chapter_logo.png" alt="Be Human" />
            </section>

            <section class="hidden-xs col-sm-4 pull-right text-center center">
              <p class="title title-cursive center">Culture For Service</p>
              <p class="title title-cursive center">Service For Humanity</p>
            </section>

          </section>
        </section>
      </section>
      <!-- Main Nav Bar -->
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav center" style="max-width:1000px">
              <li><a href="/~kappachi/index.html">Home<span class="sr-only">(current)</span></a></li>
              <li><a href="/~kappachi/fraternity/index.html">The Fraternity<span class="sr-only"></span></a></li>
              <li><a href="/~kappachi/chapter/index.html">The Chapter<span class="sr-only"></span></a></li>
              <li><a href="/~kappachi/programs/index.html">Programs</a></li>
              <li><a href="/~kappachi/lineage/index.html">Lineage</a></li>
              <li><a href="/~kappachi/membership/index.html">Membership</a></li>
              <!--<li><a href="/~kappachi/newsletter/index.html">Newsletter</a></li>-->
              <li><a href="/~kappachi/donations/index.html">Donations</a></li>
              <li><a href="/~kappachi/stompfest/index.html">Stompfest</a></li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
      <!-- End Main Nav Bar -->
    </header>
    <!-- End of Header -->

<div class="lineage-header">
  <h1 class="lineage-title">Lineage</h1>
  <p class="lineage-subtitle">A Legacy of Brotherhood Since 1979</p>
</div>

`
function html1(json) {
  var html1 =  `
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<div class="text-center date">${json.date.replace(' ', '<br>')}</div>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
        <div class="col-sm-12">
				  <h2 class="text-center">${json.line || ''}</h2>`

  if(json.image) {
    html1 += `
        <div class="col-sm-12">
          <img style="width:90%" src="${json.image}">
        </div>`
  }
  return html1
}

function html2(info) {
  if (info == null || info == '') return  '';
  return '<p class="text-center">' + info + '</p>'
}


function html3(json) {
  var members = json.members;
  var i = 1;
  var callback = '<table class="table"><tr>'
  members.forEach(function (member) {
    if(json.date !== 'Win 79') {
      callback += `<td>${i++}</td>`;
    };
    if(member.hasOwnProperty('lineName')) {
    callback += `<th>${member.lineName}</th>`;
    };
    callback +=`<td>${member.name}</td>
            </tr>`;
  });
  callback += `</table>
        </div>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

	`;

  return callback;
}


