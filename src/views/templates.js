const renderCredentialsTemplate = ({ email, password, domain }) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<!--<![endif]-->
<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
<style id="media-query" type="text/css">
		@media (max-width: 575px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col_cont {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num2 {
				width: 16.6% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num5 {
				width: 41.6% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num7 {
				width: 58.3% !important;
			}

			.no-stack .col.num8 {
				width: 66.6% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.no-stack .col.num10 {
				width: 83.3% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
</head>
<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f8f8f9;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#f8f8f9" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#f8f8f9"><![endif]-->
<div style="background-color:#1aa19c;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #1aa19c;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#1aa19c;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1aa19c;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#1aa19c"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#1aa19c;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 4px solid #1AA19C; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:#fff;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#fff;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
<p style="font-size: 24px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 24px;"><strong>Future World Consultancy</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f8f8f9;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#f8f8f9;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#f8f8f9"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#f8f8f9;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#fff;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 60px; padding-right: 0px; padding-bottom: 12px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<div align="center" class="img-container center fixedwidth" style="padding-right: 40px;padding-left: 40px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 40px;padding-left: 40px;" align="center"><![endif]--><img align="center" alt="I'm an image" border="0" class="center fixedwidth" src="${domain}/images/Img22x.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 305px; display: block;" title="I'm an image" width="305"/>
<!--[if mso]></td></tr></table><![endif]-->
</div>
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 50px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
<div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
<p style="font-size: 30px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 36px; margin: 0;"><span style="font-size: 30px; color: #2b303a;"><strong>Login Credentials<br/></strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
<div style="line-height: 1.5; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;">
<p style="font-size: 15px; line-height: 1.5; text-align: center; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 23px; margin: 0;"><span style="color: #808389; font-size: 15px;">Find your login credentials for the new FWC Employee Dashboard. F</span><span style="color: #808389; font-size: 15px;">ill in all the required on-boarding information first, before submitting the form. </span></p>
<p style="font-size: 15px; line-height: 1.5; text-align: center; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 23px; margin: 0;"><span style="color: #808389; font-size: 15px;">For Any queries, contact your Manager/Admin</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid two-up no-stack" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="277" style="background-color:#fff;width:277px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 276px; width: 277px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
<p style="font-size: 15px; line-height: 1.2; word-break: break-word; text-align: right; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 15px;"><strong>Email</strong></span></p>
<p style="font-size: 15px; line-height: 1.2; word-break: break-word; text-align: right; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 15px;"><strong>Password</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td><td align="center" width="277" style="background-color:#fff;width:277px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 276px; width: 277px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
<p style="line-height: 1.2; word-break: break-word; font-size: 15px; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 15px;">${email}<br/></span></p>
<p style="line-height: 1.2; word-break: break-word; font-size: 15px; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 15px;">${password}</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid no-stack" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f8f8f9;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#f8f8f9;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#f8f8f9"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#f8f8f9;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #2b303a;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#2b303a;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#2b303a"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#2b303a;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 4px solid #1AA19C; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="I'm an image" border="0" class="center autowidth" src="${domain}/images/footer.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 555px; display: block;" title="I'm an image" width="555"/>
<!--[if mso]></td></tr></table><![endif]-->
</div>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 15px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:15px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
<div style="line-height: 1.5; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;">
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; margin: 0;"><span style="color: #95979c; font-size: 12px;">Future World is a friendly and trustable IT Consulting manpower Partner of 50+ emerging and leading companies in Bangalore and pan India.Experience of handing clients across the industries- IT, Non IT, Manufacturing, Trading, Software, Security and Hospitality. </span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 25px; padding-right: 40px; padding-bottom: 10px; padding-left: 40px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #555961; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 20px; padding-bottom: 30px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:40px;padding-bottom:30px;padding-left:40px;">
<div style="line-height: 1.2; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 14px;">
<p style="font-size: 12px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px; margin: 0;"><span style="color: #95979c; font-size: 12px;">Future World Consultancy © 2020</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>
`;

const renderResetPasswordTemplate = ({ email, password, domain }) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<!--<![endif]-->
<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
<style id="media-query" type="text/css">
		@media (max-width: 575px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col_cont {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num2 {
				width: 16.6% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num5 {
				width: 41.6% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num7 {
				width: 58.3% !important;
			}

			.no-stack .col.num8 {
				width: 66.6% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.no-stack .col.num10 {
				width: 83.3% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
</head>
<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f8f8f9;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#f8f8f9" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#f8f8f9"><![endif]-->
<div style="background-color:#1aa19c;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #1aa19c;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#1aa19c;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1aa19c;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#1aa19c"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#1aa19c;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 4px solid #1AA19C; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:#fff;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#fff;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
<p style="font-size: 24px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 29px; margin: 0;"><span style="font-size: 24px;"><strong>Future World Consultancy</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f8f8f9;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#f8f8f9;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#f8f8f9"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#f8f8f9;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#fff;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 60px; padding-right: 0px; padding-bottom: 12px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<div align="center" class="img-container center fixedwidth" style="padding-right: 40px;padding-left: 40px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 40px;padding-left: 40px;" align="center"><![endif]--><img align="center" alt="I'm an image" border="0" class="center fixedwidth" src="${domain}/images/Img22x.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 305px; display: block;" title="I'm an image" width="305"/>
<!--[if mso]></td></tr></table><![endif]-->
</div>
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 50px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
<div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
<p style="font-size: 30px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 36px; margin: 0;"><span style="font-size: 30px; color: #2b303a;"><strong>Reset Password Credentials<br/></strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
<div style="line-height: 1.5; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;">
<p style="font-size: 15px; line-height: 1.5; text-align: center; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 23px; margin: 0;"><span style="color: #808389; font-size: 15px;">Find your login credentials for the new FWC Employee Dashboard. F</span><span style="color: #808389; font-size: 15px;">ill in all the required on-boarding information first, before submitting the form. </span></p>
<p style="font-size: 15px; line-height: 1.5; text-align: center; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 23px; margin: 0;"><span style="color: #808389; font-size: 15px;">For Any queries, contact your Manager/Admin</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid two-up no-stack" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #fff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#fff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#fff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="277" style="background-color:#fff;width:277px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 276px; width: 277px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
<p style="font-size: 15px; line-height: 1.2; word-break: break-word; text-align: right; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 15px;"><strong>Email</strong></span></p>
<p style="font-size: 15px; line-height: 1.2; word-break: break-word; text-align: right; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 15px;"><strong>Password</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td><td align="center" width="277" style="background-color:#fff;width:277px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num6" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 276px; width: 277px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
<p style="line-height: 1.2; word-break: break-word; font-size: 15px; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 15px;">${email}<br/></span></p>
<p style="line-height: 1.2; word-break: break-word; font-size: 15px; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 15px;">${password}</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid no-stack" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #f8f8f9;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#f8f8f9;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#f8f8f9"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#f8f8f9;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 555px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #2b303a;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#2b303a;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:555px"><tr class="layout-full-width" style="background-color:#2b303a"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="555" style="background-color:#2b303a;width:555px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 555px; display: table-cell; vertical-align: top; width: 555px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 4px solid #1AA19C; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="I'm an image" border="0" class="center autowidth" src="${domain}/images/footer.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 555px; display: block;" title="I'm an image" width="555"/>
<!--[if mso]></td></tr></table><![endif]-->
</div>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 15px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:15px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
<div style="line-height: 1.5; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;">
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; margin: 0;"><span style="color: #95979c; font-size: 12px;">Future World is a friendly and trustable IT Consulting manpower Partner of 50+ emerging and leading companies in Bangalore and pan India.Experience of handing clients across the industries- IT, Non IT, Manufacturing, Trading, Software, Security and Hospitality. </span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 25px; padding-right: 40px; padding-bottom: 10px; padding-left: 40px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #555961; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 20px; padding-bottom: 30px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:40px;padding-bottom:30px;padding-left:40px;">
<div style="line-height: 1.2; font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 14px;">
<p style="font-size: 12px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px; margin: 0;"><span style="color: #95979c; font-size: 12px;">Future World Consultancy © 2020</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>
`;

const renderUploadFilesTemplate = ({ message, message2 }) => `



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <!--[if gte mso 9
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:AllowPNG /><o:PixelsPerInch
            >96</o:PixelsPerInch
          ></o:OfficeDocumentSettings
        ></xml
      ><!
    [endif]-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width" name="viewport" />
    <!--[if !mso]><!-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Poppins"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }

      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
    <style id="media-query" type="text/css">
      @media (max-width: 620px) {
        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }

        .block-grid {
          width: 100% !important;
        }

        .col {
          width: 100% !important;
        }

        .col_cont {
          margin: 0 auto;
        }

        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }

        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }

        .no-stack.two-up .col {
          width: 50% !important;
        }

        .no-stack .col.num2 {
          width: 16.6% !important;
        }

        .no-stack .col.num3 {
          width: 25% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num5 {
          width: 41.6% !important;
        }

        .no-stack .col.num6 {
          width: 50% !important;
        }

        .no-stack .col.num7 {
          width: 58.3% !important;
        }

        .no-stack .col.num8 {
          width: 66.6% !important;
        }

        .no-stack .col.num9 {
          width: 75% !important;
        }

        .no-stack .col.num10 {
          width: 83.3% !important;
        }

        .video-block {
          max-width: none !important;
        }

        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body
    class="clean-body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #e8e8f6;
    "
  >
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <table
      bgcolor="#e8e8f6"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        table-layout: fixed;
        vertical-align: top;
        min-width: 320px;
        border-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #e8e8f6;
        width: 100%;
      "
      valign="top"
      width="100%"
    >
      <tbody>
        <tr style="vertical-align: top" valign="top">
          <td style="word-break: break-word; vertical-align: top" valign="top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#e8e8f6"><![endif]-->
            <div style="background-color: transparent">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 15px;
                          padding-bottom: 15px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 20px; padding-bottom: 20px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #06a2d8;
                            font-family: Poppins, Arial, Helvetica, sans-serif;
                            line-height: 1.2;
                            padding-top: 20px;
                            padding-right: 10px;
                            padding-bottom: 20px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              color: #06a2d8;
                              font-family: Poppins, Arial, Helvetica, sans-serif;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                word-break: break-word;
                                text-align: center;
                                mso-line-height-alt: 17px;
                                margin: 0;
                              "
                            >
                              <!--(figmeta)eyJmaWxlS2V5IjoiWEV5MjRKNzVubDRqWVdQaUl5ckdsVCIsInBhc3RlSUQiOi0xLCJkYXRhVHlwZSI6InNjZW5lIn0K(/figmeta)-->
                              <!--(figma)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(/figma)--><strong
                                ><span style="font-size: 46px"
                                  >UPLOAD FILES RESULTS</span
                                ></strong
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #555555;
                            font-family: Poppins, Arial, Helvetica, sans-serif;
                            line-height: 1.2;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              color: #555555;
                              font-family: Poppins, Arial, Helvetica, sans-serif;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.2;
                                word-break: break-word;
                                mso-line-height-alt: 17px;
                                margin: 0;
                              "
                            >
                              Hello Admin, 
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 15px;
                          padding-bottom: 15px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #6868a6;
                            font-family: Poppins, Arial, Helvetica, sans-serif;
                            line-height: 1.8;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.8;
                              font-size: 12px;
                              color: #6868a6;
                              font-family: Poppins, Arial, Helvetica, sans-serif;
                              mso-line-height-alt: 22px;
                            "
													>
													
                            <p
                              style="
                                line-height: 1.8;
                                word-break: break-word;
                                mso-line-height-alt: 22px;
                                margin: 0;
                              "
														>
													
                              ${message} 
                              
                            </p>   <p
                            style="
                              line-height: 1.8;
                              word-break: break-word;
                              mso-line-height-alt: 22px;
                              margin: 0;
                            "
                          >
                        
                            ${message2} 
                            
                          </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #6868a6;
                            font-family: Poppins, Arial, Helvetica, sans-serif;
                            line-height: 1.8;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.8;
                              font-size: 12px;
                              color: #6868a6;
                              font-family: Poppins, Arial, Helvetica, sans-serif;
                              mso-line-height-alt: 22px;
                            "
                          >
                            <p
                              style="
                                font-size: 16px;
                                line-height: 1.8;
                                word-break: break-word;
                                text-align: center;
                                mso-line-height-alt: 29px;
                                margin: 0;
                              "
                            >
                              <!--(figmeta)eyJmaWxlS2V5IjoiWEV5MjRKNzVubDRqWVdQaUl5ckdsVCIsInBhc3RlSUQiOi0xLCJkYXRhVHlwZSI6InNjZW5lIn0K(/figmeta)-->
                              <!--(figma)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(/figma)--><span
                                style="font-size: 16px"
                                ><strong>Thank you,</strong></span
                              ><br /><span style="font-size: 16px"
                                ><strong>FWC</strong></span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 1px solid #06a2d8;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 600px;
                      display: table-cell;
                      vertical-align: top;
                      width: 600px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 15px;
                          padding-bottom: 15px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <div></div>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent">
              <div
                class="block-grid two-up no-stack"
                style="
                  min-width: 320px;
                  max-width: 600px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="300" style="background-color:transparent;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:10px; padding-bottom:10px;"><![endif]-->
                  <div
                    class="col num6"
                    style="
                      display: table-cell;
                      vertical-align: top;
                      max-width: 320px;
                      min-width: 300px;
                      width: 300px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 10px;
                          padding-bottom: 10px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <div
                          align="right"
                          class="img-container right fixedwidth"
                          style="padding-right: 5px; padding-left: 0px"
                        >
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 5px;padding-left: 0px;" align="right"><!
                          [endif]--><a
                            href="https://designedwithbee.com/"
                            style="outline: none"
                            tabindex="-1"
                            target="_blank"
                          >
                          </a>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td><td align="center" width="300" style="background-color:transparent;width:300px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:10px; padding-bottom:10px;"><![endif]-->
                  <div
                    class="col num6"
                    style="
                      display: table-cell;
                      vertical-align: top;
                      max-width: 320px;
                      min-width: 300px;
                      width: 300px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 10px;
                          padding-bottom: 10px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 4px; padding-left: 4px; padding-top: 4px; padding-bottom: 4px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #9d9d9d;
                            font-family: 'Lato', Tahoma, Verdana, Segoe,
                              sans-serif;
                            line-height: 1.2;
                            padding-top: 4px;
                            padding-right: 4px;
                            padding-bottom: 4px;
                            padding-left: 4px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              font-family: 'Lato', Tahoma, Verdana, Segoe,
                                sans-serif;
                              color: #9d9d9d;
                              mso-line-height-alt: 14px;
                            "
                          ></div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if (IE)]></div><![endif]-->
  </body>
</html>





`;

module.exports = {
  renderCredentialsTemplate,
  renderResetPasswordTemplate,
  renderUploadFilesTemplate,
};
