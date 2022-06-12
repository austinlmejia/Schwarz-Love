import React from "react";
import theme from "theme";
import { Theme, Text, Section, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"matching"} />
		<Helmet>
			<title>
				SchwarzLove
			</title>
			<meta name={"description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:title"} content={"You choose are great vacation"} />
			<meta property={"og:description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/OGimage.png?v=2021-09-23T20:32:10.363Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/62a1458bf45b7e002476cccd/images/pixel%20heart.png?v=2022-06-09T16:19:53.665Z"} />
			<meta name={"msapplication-TileColor"} content={"#ff007a"} />
		</Helmet>
		<Section padding="18px 0 18px 0" quarkly-title="Header" background="--color-purple" color="--light">
			<Override
				slot="SectionContent"
				justify-content="space-around"
				flex-direction="row"
				align-items="center"
				font="600 20px/1.3 --fontFamily-googleManrope"
				sm-font="600 13px/1.3 --fontFamily-googleManrope"
			/>
			<Text margin="0px 0px 0px 0px" font="600 20px/1.3 --fontFamily-googleManrope" sm-font="600 16px/1.3 --fontFamily-googleManrope">
				A Schwarzman Social Club Project
			</Text>
		</Section>
		<Section padding="60px 0 60px 0" quarkly-title="HeroBlock" background="--color-purple" sm-padding="30px 0 20px 0">
			<Override slot="SectionContent" display="inline" text-align="center" />
			<Box min-width="100px" min-height="100px" width="75%" sm-width="100%">
				<Text
					color="--light"
					lg-font="normal 800 120px/1 &quot;Manrope&quot;, sans-serif"
					md-font="normal 800 170px/1 &quot;Manrope&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					font="normal 800 180px/1.2 --fontFamily-googleManrope"
					align-self="flex-start"
					text-align="left"
					sm-font="normal 800 65px/1 &quot;Manrope&quot;, sans-serif"
				>
					Matching
				</Text>
			</Box>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0" lg-padding="28px 0 28px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				md-flex-wrap="wrap"
				display="block"
				flex="0 0 auto"
			/>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="block"
				md-width="100%"
				empty-min-width="64px"
				lg-width="60%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					This is the easy part: just click and select every person you  like.
				</Text>
			</Box>
		</Section>
		<Section align-items="center">
			<Override slot="SectionContent" align-items="center" />
			<Components.QuarklycommunityKitForm
				width="50%"
				margin="0px 300px 0px 0px"
				sm-width="100%"
				sm-margin="0px 0 0px 0px"
				autoComplete="on"
				method="post"
				name="Schwarz-Love"
				action="https://formspree.io/f/xbjwbawz"
			>
				<Components.SchwarzLoveFormContent>
					<Override slot="input" placeholder="John Doe" required name="name" />
					<Override
						slot="input1"
						placeholder="john.doe@sc.tsinghua.edu.cn"
						required
						name="email"
						type="email"
					/>
					<Override slot="quarklycommunityKitCheckbox" name="Zahrah" defaultChecked={false} value="Y" />
					<Override slot="quarklycommunityKitCheckbox1" name="Vidette" value="Y" />
					<Override slot="quarklycommunityKitCheckbox2" name="Maria" value="Y" />
					<Override slot="quarklycommunityKitCheckbox3" name="Andrey" value="Y" />
					<Override slot="quarklycommunityKitCheckbox4" name="Arjun-Alim" value="Y" />
					<Override slot="quarklycommunityKitCheckbox5" name="Hasani" value="Y" />
					<Override slot="quarklycommunityKitCheckbox6" name="Diane" value="Y" />
					<Override slot="quarklycommunityKitCheckbox7" name="Eleni" value="Y" />
					<Override slot="quarklycommunityKitCheckbox8" name="Matt" value="Y" />
					<Override slot="quarklycommunityKitCheckbox9" name="Daniyar" value="Y" />
					<Override slot="quarklycommunityKitCheckbox10" name="Jamie" value="Y" />
					<Override slot="quarklycommunityKitCheckbox11" name="Patrik" value="Y" />
					<Override slot="quarklycommunityKitCheckbox12" name="Taylah" value="Y" />
					<Override slot="quarklycommunityKitCheckbox13" name="Taylor" value="Y" />
					<Override slot="quarklycommunityKitCheckbox14" name="Ty" value="Y" />
					<Override slot="quarklycommunityKitCheckbox15" name="Katherine" value="Y" />
					<Override slot="quarklycommunityKitCheckbox16" name="Suraj" value="Y" />
					<Override slot="quarklycommunityKitCheckbox17" name="Jared" value="Y" />
					<Override slot="quarklycommunityKitCheckbox18" name="Henry" value="Y" />
					<Override slot="quarklycommunityKitCheckbox19" name="Luise" value="Y" />
					<Override slot="quarklycommunityKitCheckbox20" name="Luke" value="Y" />
					<Override slot="quarklycommunityKitCheckbox21" name="Ariana" value="Y" />
					<Override slot="quarklycommunityKitCheckbox22" name="Gurchit" value="Y" />
					<Override slot="quarklycommunityKitCheckbox23" name="Laura" value="Y" />
					<Override slot="quarklycommunityKitCheckbox24" name="Xiao" value="Y" />
					<Override slot="quarklycommunityKitCheckbox25" name="ChenChen" value="Y" />
					<Override slot="quarklycommunityKitCheckbox26" name="Shomy" value="Y" />
					<Override slot="quarklycommunityKitCheckbox27" name="WanFung" value="Y" />
					<Override slot="quarklycommunityKitCheckbox28" name="ACrich" value="Y" />
					<Override slot="quarklycommunityKitCheckbox29" name="Haotian" value="Y" />
					<Override slot="quarklycommunityKitCheckbox30" name="Guillaume" value="Y" />
					<Override slot="quarklycommunityKitCheckbox31" name="Oyumaa" value="Y" />
					<Override slot="quarklycommunityKitCheckbox32" name="Louis" value="Y" />
					<Override slot="quarklycommunityKitCheckbox33" name="Sameer" value="Y" />
					<Override slot="quarklycommunityKitCheckbox34" name="Julius" value="Y" />
					<Override slot="quarklycommunityKitCheckbox35" name="Ilene" value="Y" />
					<Override slot="quarklycommunityKitCheckbox36" name="Zakiyya" value="Y" />
					<Override slot="quarklycommunityKitCheckbox37" name="Lamount" value="Y" />
					<Override slot="quarklycommunityKitCheckbox38" name="Michelle" value="Y" />
					<Override slot="quarklycommunityKitCheckbox39" name="Carlos" value="Y" />
					<Override slot="quarklycommunityKitCheckbox40" name="Leo" value="Y" />
					<Override slot="quarklycommunityKitCheckbox41" name="Atticus" value="Y" />
					<Override slot="quarklycommunityKitCheckbox42" name="Vodka" value="Y" />
					<Override slot="quarklycommunityKitCheckbox43" name="DG" value="Y" />
					<Override slot="quarklycommunityKitCheckbox44" name="Jessica" value="Y" />
					<Override slot="quarklycommunityKitCheckbox45" name="Alan" value="Y" />
					<Override slot="quarklycommunityKitCheckbox46" name="Selena" value="Y" />
					<Override slot="quarklycommunityKitCheckbox47" name="Keren" value="Y" />
					<Override slot="quarklycommunityKitCheckbox48" name="Omar" value="Y" />
					<Override slot="quarklycommunityKitCheckbox49" name="Fletcher" value="Y" />
					<Override slot="quarklycommunityKitCheckbox50" name="Lucia" value="Y" />
					<Override slot="quarklycommunityKitCheckbox51" name="Jiaheng" value="Y" />
					<Override slot="quarklycommunityKitCheckbox52" name="AHeintze" value="Y" />
					<Override slot="quarklycommunityKitCheckbox53" name="Alice" value="Y" />
					<Override slot="quarklycommunityKitCheckbox54" name="Lena" value="Y" />
					<Override slot="quarklycommunityKitCheckbox55" name="Jenn" value="Y" />
					<Override slot="quarklycommunityKitCheckbox56" name="Lujain" value="Y" />
					<Override slot="quarklycommunityKitCheckbox57" name="Charles" value="Y" />
					<Override slot="quarklycommunityKitCheckbox58" name="Nikhil" value="Y" />
					<Override slot="quarklycommunityKitCheckboxOverride59">
						Zumrad "Zuma" Jalilova
					</Override>
					<Override slot="quarklycommunityKitCheckbox59" name="Zuma" value="Y" />
					<Override slot="quarklycommunityKitCheckbox60" name="Lorena" value="Y" />
					<Override slot="quarklycommunityKitCheckbox61" name="Elaine" value="Y" />
					<Override slot="quarklycommunityKitCheckbox62" name="Sophie" value="Y" />
					<Override slot="quarklycommunityKitCheckbox63" name="Trent" value="Y" />
					<Override slot="quarklycommunityKitCheckbox64" name="Vanshica" value="Y" />
					<Override slot="quarklycommunityKitCheckbox65" name="Melissa" value="Y" />
					<Override slot="quarklycommunityKitCheckbox66" name="Josh" value="Y" />
					<Override slot="quarklycommunityKitCheckbox67" name="Roda" value="Y" />
					<Override slot="quarklycommunityKitCheckbox68" name="HarisK" value="Y" />
					<Override slot="quarklycommunityKitCheckbox69" name="Matea" value="Y" />
					<Override slot="quarklycommunityKitCheckbox70" name="ArjunK" value="Y" />
					<Override slot="quarklycommunityKitCheckbox71" name="Margo" value="Y" />
					<Override slot="quarklycommunityKitCheckbox72" name="Jack" value="Y" />
					<Override slot="quarklycommunityKitCheckbox73" name="Tre" value="Y" />
					<Override slot="quarklycommunityKitCheckbox74" name="Molly" value="Y" />
					<Override slot="quarklycommunityKitCheckbox75" name="ALi" value="Y" />
					<Override slot="quarklycommunityKitCheckbox76" name="Miranda" value="Y" />
					<Override slot="quarklycommunityKitCheckbox77" name="Jin" value="Y" />
					<Override slot="quarklycommunityKitCheckbox78" name="ALiu" value="Y" />
					<Override slot="quarklycommunityKitCheckbox79" name="Dwight" value="Y" />
					<Override slot="quarklycommunityKitCheckbox80" name="Ben" value="Y" />
					<Override slot="quarklycommunityKitCheckbox81" name="Fran" value="Y" />
					<Override slot="quarklycommunityKitCheckbox82" name="Susana" value="Y" />
					<Override slot="quarklycommunityKitCheckbox83" name="Tafadzma" value="Y" />
					<Override slot="quarklycommunityKitCheckbox84" name="Michael" value="Y" />
					<Override slot="quarklycommunityKitCheckbox85" name="Zihao" value="Y" />
					<Override slot="quarklycommunityKitCheckbox86" name="AustinSexiestMan" value="Y" />
					<Override slot="quarklycommunityKitCheckbox87" name="Lucio" value="Y" />
					<Override slot="quarklycommunityKitCheckbox88" name="Jevon" value="Y" />
					<Override slot="quarklycommunityKitCheckbox89" name="Eli" value="Y" />
					<Override slot="quarklycommunityKitCheckbox90" name="Eric" value="Y" />
					<Override slot="quarklycommunityKitCheckbox91" name="Malike" value="Y" />
					<Override slot="quarklycommunityKitCheckbox92" name="Karuna" value="Y" />
					<Override slot="quarklycommunityKitCheckbox93" name="Alliance" value="Y" />
					<Override slot="quarklycommunityKitCheckbox94" name="Sergio" value="Y" />
					<Override slot="quarklycommunityKitCheckbox95" name="Serge" value="Y" />
					<Override slot="quarklycommunityKitCheckboxOverride94">
						Sergio Nuhrmann
					</Override>
					<Override slot="quarklycommunityKitCheckbox96" name="Arinze" value="Y" />
					<Override slot="quarklycommunityKitCheckbox97" name="Segun" value="Y" />
					<Override slot="quarklycommunityKitCheckbox98" name="Yucheng" value="Y" />
					<Override slot="quarklycommunityKitCheckbox99" name="WAP" value="Y" />
					<Override slot="quarklycommunityKitCheckbox100" name="John" value="Y" />
					<Override slot="quarklycommunityKitCheckbox101" name="Cristina" value="Y" />
					<Override slot="quarklycommunityKitCheckbox102" name="Mallie" value="Y" />
					<Override slot="quarklycommunityKitCheckbox103" name="Mikaela" value="Y" />
					<Override slot="quarklycommunityKitCheckbox104" name="HarrisR" value="Y" />
					<Override slot="quarklycommunityKitCheckbox105" name="karthik" value="Y" />
					<Override slot="quarklycommunityKitCheckbox106" name="otelo" value="Y" />
					<Override slot="quarklycommunityKitCheckbox107" name="Caleb" value="Y" />
					<Override slot="quarklycommunityKitCheckbox108" name="Julien" value="Y" />
					<Override slot="quarklycommunityKitCheckbox109" name="Philip" value="Y" />
					<Override slot="quarklycommunityKitCheckbox110" name="Paulina" value="Y" />
					<Override slot="quarklycommunityKitCheckbox111" name="Alois" value="Y" />
					<Override slot="quarklycommunityKitCheckbox112" name="WilliamS" value="Y" />
					<Override slot="quarklycommunityKitCheckbox113" name="Harry" value="Y" />
					<Override slot="quarklycommunityKitCheckbox114" name="Jeremiah" value="Y" />
					<Override slot="quarklycommunityKitCheckbox115" name="Tony" value="Y" />
					<Override slot="quarklycommunityKitCheckbox116" name="Saad" value="Y" />
					<Override slot="quarklycommunityKitCheckbox117" name="Eduarda" value="Y" />
					<Override slot="quarklycommunityKitCheckbox118" name="Igor" value="Y" />
					<Override slot="quarklycommunityKitCheckbox119" name="Zhi Min" value="Y" />
					<Override slot="quarklycommunityKitCheckbox120" name="Shivam" value="Y" />
					<Override slot="quarklycommunityKitCheckbox121" name="Kuwar" value="Y" />
					<Override slot="quarklycommunityKitCheckbox122" name="Sadie" value="Y" />
					<Override slot="quarklycommunityKitCheckbox123" name="Trenton" value="Y" />
					<Override slot="quarklycommunityKitCheckbox124" name="Bryan" value="Y" />
					<Override slot="quarklycommunityKitCheckbox125" name="Annie" value="Y" />
					<Override slot="quarklycommunityKitCheckbox126" name="TangTang" value="Y" />
					<Override slot="quarklycommunityKitCheckbox127" name="Mabel" value="Y" />
					<Override slot="quarklycommunityKitCheckbox128" name="Anathi" value="Y" />
					<Override slot="quarklycommunityKitCheckbox129" name="Denyse" value="Y" />
					<Override slot="quarklycommunityKitCheckbox130" name="EmmaQUEEN" value="Y" />
					<Override slot="quarklycommunityKitCheckbox131" name="Milan" value="Y" />
					<Override slot="quarklycommunityKitCheckbox132" name="Turan" value="Y" />
					<Override slot="quarklycommunityKitCheckbox133" name="Ava" value="Y" />
					<Override slot="quarklycommunityKitCheckbox134" name="CC" value="Y" />
					<Override slot="quarklycommunityKitCheckbox135" name="Factor" value="Y" />
					<Override slot="quarklycommunityKitCheckbox136" name="Jenna" value="Y" />
					<Override slot="quarklycommunityKitCheckbox137" name="Raven" value="Y" />
					<Override slot="quarklycommunityKitCheckbox138" name="Richard" value="Y" />
					<Override slot="quarklycommunityKitCheckbox139" name="Fisher" value="Y" />
					<Override slot="quarklycommunityKitCheckbox140" name="Yida" value="Y" />
					<Override slot="quarklycommunityKitCheckbox141" name="Mingqi" value="Y" />
					<Override slot="quarklycommunityKitCheckbox142" name="Sally" value="Y" />
					<Override slot="quarklycommunityKitCheckbox143" name="Pearl" value="Y" />
					<Override slot="quarklycommunityKitCheckbox144" name="Bob" value="Y" />
					<Override slot="quarklycommunityKitCheckbox145" name="Kristina" value="Y" />
					<Override slot="quarklycommunityKitCheckbox146" name="Ryan" value="Y" />
					<Override slot="quarklycommunityKitCheckbox147" name="AZhao" value="Y" />
					<Override slot="quarklycommunityKitCheckbox148" name="Jason" value="Y" />
					<Override slot="quarklycommunityKitCheckbox149" name="Warren" value="Y" />
					<Override slot="quarklycommunityKitCheckbox150" name="Courtney" value="Y" />
				</Components.SchwarzLoveFormContent>
				<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
					<Button margin="10px 0px 0px 0px">
						Send
					</Button>
				</Box>
			</Components.QuarklycommunityKitForm>
		</Section>
		<Section background="--color-purple" margin="0 0 0 0">
			<Override
				slot="SectionContent"
				color="--light"
				font="--headline2"
				text-align="center"
				margin="0px 64px 20px 64px"
				sm-margin="0px 20px 20px 20px"
			/>
			<Text margin="20px 0px 0px 0px" sm-font="700 40px/60px Manrope, sans-serif" sm-width="100% border-box">
				Love is just a click away.{" "}
			</Text>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});