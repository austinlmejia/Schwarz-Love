import React from "react";
import theme from "theme";
import { Theme, Text, Section, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
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
		<Section padding="60px 0 60px 0" quarkly-title="HeroBlock" background="--color-purple" sm-padding="60px 0 40px 0">
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
					sm-font="normal 800 110px/1 &quot;Manrope&quot;, sans-serif"
				>
					Matching
				</Text>
			</Box>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0" lg-padding="28px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="60%"
				display="flex"
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
		<Section background="#ffffff" color="--dark" padding="64px 0 64px 0" lg-background="#ffffff">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" align-self="center">
				<Box width="100%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="austinmejia12@gmail.com" completeText="Your matches are on their way, sit tight ;)">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										Name (Used in email sent out)
									</Text>
									<Input width="100%" name="name" type="text" lg-background="--color-lightD1" />
									<Text font="--base" margin="0 0 4px 0">
										Email (ONLY use your Schwarzman Address, none other)
									</Text>
									<Input width="100%" name="name" type="text" lg-background="--color-lightD1" />
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Zahrah Abdulrauf
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Vidette Adjorlolo
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Maria Ahmed
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Andrey Aksenov
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Arjun Neil Alim
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Hasani Arnold
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Diane Audras
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Eleni Ayala Ojeda
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Matt Barocas
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Daniyar Batyrov
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jamie Beaton
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Patrik Birkle
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Taylah Bland
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Taylor Blossom
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Tennyson Brown-Wolf
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Katherine Budeski
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Suraj Bulchand
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jared Burleson
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Henry Cao
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Luise Castlunger
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Luke Cavanaugh
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Ariana Chaivaranon
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Gurchit Chatha
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Laura Angelica Chavez-Varela
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Xiao Chen
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Yuexuan "Chen Chen" Chen
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Shomy Hasan Chowdhury
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Wan Fung Chui
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Alexander Crich
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Haotian Cui
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Guillaume Dabre
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Oyumaa Daichinkhuu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Louis Devine
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Sameer Dhar
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Julius Dodson
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Ilene E
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Zakiyya Ellington
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Lamount Evanson
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Michelle Fang
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Carlos Flores
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Leonardo Focil
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Atticus Francken
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Lei "Vodka" Fu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Duo Geng Goh
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jessica Greely
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Yu "Alan" Gu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Selena Guo
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Keren Guttman
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Omar Hamade
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Fletcher Han
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Lucia He
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jiaheng He
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Alexander Heintze
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Alice Ho
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Lena Hoffmann
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jenn Hu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Lujain Ibrahim
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Charles Isgar
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Nikhil Jain
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Zumrad Jalilova
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Lorena James
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Dabin "Elaine" Jeon
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Sophie Jiang
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Trent Kannegieter
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Vanshica Kant
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Melissa Kariuki
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Joshua Kemp
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Roda Kesete
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Haris Khan
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Matea Kocevska
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Arjun Sai Krishnan
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Margo Labkovich
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jack Lam
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Trevaughn Latimer
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Molly Leavens
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Alexander Li
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Miranda Li
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jin Young Lim
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Zhengyuan "Alex" Liu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Dwight Ma
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Benjamin Ma
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Francesca "Fran" Macchiavello Cauvi
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Susana Machado
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Tafadzma Marombedza
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Michael McPhail
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Zihao Mei
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Austin Mejia
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Lucio Milanese
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jevon Minto
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Eli Morimoto
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Eric Muellejans
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Malike Naibi
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Karuna Nandkumar
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Alliance Niyigena
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Sergio Muhrmann
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Serge-Raymond Nzabandora
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Arinze Obiezue
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Segun Omole
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Yucheng Peng
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											William Peracchio
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											John Petrie
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Cristina Pogorevici
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Mallie Prytherch
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Mikaela Rabb
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Harris Rahman
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Karthik Ramesh
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Otelo Reggy-Beane
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Caleb Ren
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Julien Rosenbloom
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Philip Ruffini
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Paulina Ruta
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Alois Savanne
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											William Seaton
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Harry Seavey
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jeremiah Sekyi
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Tony Shu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Saad Siddiqui
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Eduarda Silva
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Igor Patrick Silva
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Zhi Min Sim
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Shivam Singh
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Kuwar Singh
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Sadie Statman
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Trenton Stone
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Bryan Stromer
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Annie Sun
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Yucheng "Tang Tang" Tang
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Mabel Kai Tong Tie
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Anathi Tshabe
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Denyse Umuhuza
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Emma Verges
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Milan Vivanco
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Turan Vural
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Ava Waitz
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Yixi "CC" Wang
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Ziqi "Factor" Will
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jenna Wichterman
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Raven Witherspoon
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Richard Wong
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Kefei "Fisher" Wu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Yida Xiao
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Mingqi Xie
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Xiaoheng "Sally" Xu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Kexuan "Pearl" Xu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Hehao "Bob" Xu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Sheng "Kristina" Yu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Ryan Zhang
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Alexander Zhao
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Jason Zhou
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Warren Zhu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
									<Components.QuarklycommunityKitCheckbox>
										<Override slot="Text">
											Courtney Zhu
										</Override>
									</Components.QuarklycommunityKitCheckbox>
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button>
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							Contact
						</Text>
						<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
							Email us, we would love to hear form you
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" type="text" />
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button>
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-purple">
			<Override slot="SectionContent" color="--light" font="--headline2" text-align="center" />
			<Text margin="20px 0px 0px 0px" sm-font="700 40px/60px Manrope, sans-serif">
				Love is just a click away.{" "}
			</Text>
			<Box min-width="100px" min-height="100px">
				<Button
					text-align="center"
					background="--color-light"
					color="--purple"
					font="normal 500 18px/1.5 &quot;Manrope&quot;, sans-serif"
					margin="20px 0px 0px 0px"
				>
					Get Matched
				</Button>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});