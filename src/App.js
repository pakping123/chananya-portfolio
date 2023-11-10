import { Button, Grid, Typography } from "@mui/material";
import "./App.css";
import futureSkill1 from "./assets/futureskill1.jpg";
import futureSkill2 from "./assets/futureskill2.jpg";
import futureSkill3 from "./assets/futureskill3.jpg";
import futureSkill4 from "./assets/futureskill4.jpg";
import futureSkill5 from "./assets/futureskill5.jpg";
import futureSkill6 from "./assets/futureskill6.jpg";
import futureSkill7 from "./assets/futureskill7.jpg";
import futureSkill8 from "./assets/futuerskill8.jpg";
import futureSkill9 from "./assets/futureskill9.jpg";
import chananya from "./assets/chananya.jpg";
import futureSkill10 from "./assets/futureskill10.jpg";
import futureSkill11 from "./assets/futureskill11.jpg";
import futureSkill12 from "./assets/futureskill12.jpg";
import chula1 from "./assets/chula1.jpg";
import หอวัง1 from "./assets/หอวัง1.jpg";
import futureSkill13 from "./assets/futureskill13.jpg";
import futureSkill14 from "./assets/futureskill14.jpg";
import แม่โจ้ from "./assets/แม่โจ้.jpg";
import ม่วงไข่ from "./assets/ม่วงไข่.jpg";
import กิจกรรม1 from "./assets/กิจกรรม1.jpg";
import กิจกรรม2 from "./assets/กิจกรรม2.jpg";
import กิจกรรม3 from "./assets/กิจกรรม3.jpg";
import กิจกรรม4 from "./assets/กิจกรรม4.jpg";
import กิจกรรม5 from "./assets/กิจกรรม5.jpg";
import กิจกรรม6 from "./assets/กิจกรรม6.jpg";
import กิจกรรม7 from "./assets/กิจกรรม7.jpg";
import กิจกรรม8 from "./assets/กิจกรรม8.jpg";
import กิจกรรม9 from "./assets/กิจกรรม9.jpg";
import กิจกรรม10 from "./assets/กิจกรรม10.jpg";
import กิจกรรม11 from "./assets/กิจกรรม11.jpg";
import กิจกรรม12 from "./assets/กิจกรรม12.jpg";
import กิจกรรม13 from "./assets/กิจกรรม13.jpg";
import ผลงาน1 from "./assets/ผลงาน1.jpg";
import ผลงาน2 from "./assets/ผลงาน2.jpg";
import ผลงาน3 from "./assets/ผลงาน3.jpg";
import ผลงาน4 from "./assets/ผลงาน4.jpg";
import ผลงาน5 from "./assets/ผลงาน5.jpg";
import ผลงาน6 from "./assets/ผลงาน6.jpg";
import ผลงาน7 from "./assets/ผลงาน7.jpg";
import ผลงาน8 from "./assets/ผลงาน8.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const App = () => {
  const name = "PakPing";
  console.log(name);
  const certificate = [
    { picture: futureSkill1 },
    { picture: futureSkill2 },
    { picture: futureSkill3 },
    { picture: futureSkill4 },
    { picture: futureSkill5 },
    { picture: futureSkill6 },
    { picture: futureSkill7 },
    { picture: futureSkill8 },
    { picture: futureSkill9 },
    { picture: futureSkill10 },
    { picture: futureSkill11 },
    { picture: futureSkill12 },
    { picture: chula1 },
    { picture: futureSkill13 },
    { picture: futureSkill14 },
    { picture: หอวัง1 },
    { picture: แม่โจ้ },
    { picture: ม่วงไข่ },
  ];
  const activity = [
    { picture: กิจกรรม1 },
    { picture: กิจกรรม2 },
    { picture: กิจกรรม3 },
    { picture: กิจกรรม4 },
    { picture: กิจกรรม5 },
    { picture: กิจกรรม6 },
    { picture: กิจกรรม7 },
    { picture: กิจกรรม8 },
    { picture: กิจกรรม9 },
    { picture: กิจกรรม10 },
    { picture: กิจกรรม11 },
    { picture: กิจกรรม12 },
    { picture: กิจกรรม13 },
  ];
  const project = [
    { picture: ผลงาน1 },
    { picture: ผลงาน2 },
    { picture: ผลงาน3 },
    { picture: ผลงาน4 },
    { picture: ผลงาน5 },
    { picture: ผลงาน6 },
    { picture: ผลงาน7 },
    { picture: ผลงาน8 },
  ];
  const itemData = [
    {
      img: ผลงาน1,
      title: "Breakfast",
    },
    {
      img: ผลงาน2,
      title: "Burger",
    },
    {
      img: ผลงาน3,
      title: "Camera",
    },
  ];
  const data1 = [
    {
      img: ผลงาน4,
      title: "Breakfast",
    },
    {
      img: ผลงาน5,
      title: "Burger",
    },
    {
      img: ผลงาน6,
      title: "Camera",
    },
  ];
  const data2 = [
    {
      img: ผลงาน7,
      title: "Breakfast",
    },
  ];
  const data3 = [
    {
      img: ผลงาน8,
      title: "Breakfast",
    },
  ];
  return (
    <>
      <div class="display">
        <Grid
          container
          sx={{ background: "rgba(255, 255, 255, 0.5)", height: "700px" }}
          xs={4}
        >
          <Grid
            item
            xs={12}
            container
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
          >
            <Typography
              variant="h2"
              color={"#ff71f3"}
              fontWeight={900}
              textAlign={"center"}
              sx={{ fontFamily: "inherit" }}
            >
              Chananya Jantra
            </Typography>
            <Typography
              color={" #480d0e"}
              fontWeight={900}
              textAlign={"center"}
              variant="h2"
              sx={{ fontFamily: "sans-serif" }}
            >
              Portfolio
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Grid
        sx={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 173, 225, 1) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <Grid
          container
          sx={{
            paddingTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <img
              style={{
                width: "400px",
                height: "600px",
                objectFit: "cover",
                borderRadius: "30px",
              }}
              src={chananya}
              alt="logo"
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
            direction={"column"}
          >
            <Typography color={"black"} fontWeight={800}>
              ชื่อ นางสาวชนัญญา จันทรา
            </Typography>
            <Typography
              color={"black"}
              fontWeight={800}
              sx={{ marginTop: "30px" }}
            >
              ชื่อเล่น พักพิง
            </Typography>
            <Typography
              color={"black"}
              fontWeight={800}
              sx={{ marginTop: "30px" }}
            >
              อายุ 18 ปี
            </Typography>
            <Typography
              color={"black"}
              fontWeight={800}
              sx={{ marginTop: "30px" }}
            >
              กำลังศีกษาอยู่ที่ โรงเรียนหอวัง ปทุมธานี
            </Typography>
            <Typography
              color={"black"}
              fontWeight={800}
              sx={{ marginTop: "30px" }}
            >
              สายการเรียน ศิลป์-ภาษาจีน
            </Typography>
            <Typography
              color={"black"}
              fontWeight={800}
              sx={{ marginTop: "30px" }}
            >
              เกรดเฉลี่ย 3.80
            </Typography>
            <Typography
              color={"black"}
              fontWeight={800}
              sx={{ marginTop: "30px" }}
            >
              ความสามารถพิเศษ :วาดภาพ เล่นกีฬา เขียนcode
            </Typography>
            <Typography
              color={"black"}
              fontWeight={800}
              sx={{ marginTop: "30px" }}
            >
              โปรแกรมที่ใช้ได้ MICOOSOFT POWER POINT CANVA AISUAL STUDIO CODE
              CLIPCHAMP
            </Typography>
          </Grid>
        </Grid>

        <Typography
          color={"black"}
          fontSize={"50px"}
          fontWeight={700}
          textAlign={"center"}
          sx={{ fontFamily: "unset" }}
        >
          Certificate
        </Typography>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            postition: "absolute",
            width: "100%",
            height: "100%",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          <Grid
            container
            sx={{
              height: "300px",
              overflowY: "auto",
              border: "4px dashed #ea4d91",
              padding: "30px 30px 30px 0px",
              borderRadius: "30px",
            }}
            xs={8}
            columnSpacing={"30px"}
            rowSpacing={"30px"}
          >
            {certificate.map((data) => (
              <Grid item container xs={12} sm={6} md={4}>
                <img
                  style={{ objectFit: "contain", borderRadius: "15px" }}
                  src={data.picture}
                  alt="1"
                  width={"100%"}
                  height={"100%"}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Typography
          color={"black"}
          fontSize={"50px"}
          fontWeight={700}
          textAlign={"center"}
          sx={{ fontFamily: "unset" }}
        >
          Activity
        </Typography>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            postition: "absolute",
            width: "100%",
            height: "100%",
            marginTop: "100px",
            marginBottom:"50px",
          }}
        >
          <Grid
            container
            sx={{
              height: "500px",
              overflowY: "auto",
              border: "10px ridge  #ea4d91",
              padding: "30px 30px 30px 0px",
              borderRadius: "30px",
            }}
            xs={8}
            columnSpacing={"30px"}
            rowSpacing={"30px"}
          >
            {activity.map((data) => (
              <Grid item container xs={12} sm={6} md={4}>
                <img
                  style={{ objectFit: "contain", borderRadius: "15px" }}
                  src={data.picture}
                  alt="1"
                  width={"100%"}
                  height={"100%"}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Typography
          color={"black"}
          fontSize={"50px"}
          fontWeight={700}
          textAlign={"center"}
          sx={{ fontFamily: "unset" }}
        >
          Project
        </Typography>
        <Grid
          container
          sx={{
            paddingTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
            direction={"column"}
            sx={{ paddingLeft: "50px" }}
          >
            <Typography color={"black"} fontWeight={800}>
              - ผลงานการเขียน code สร้างรูปภาพการ์ตูนตามจินตนาการ และได้เขียน code
              ให้แสดงความคิดเห็นได้ด้วย เขียนภาษา html , css
              เป็นผลงานชิ้นแรกที่ได้ลงมือทำค่ะ
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
            direction={"column"}
          >
            <ImageList
              sx={{ width: "auto", height: "auto" }}
              cols={3}
              // rowHeight={164}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img} >
                  <img
                    style={{ objectFit: "contain"}}
                    // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            paddingTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
            direction={"column"}
            sx={{ paddingLeft: "50px" }}
          >
            <Typography color={"black"} fontWeight={800}>
              - ผลงาน python โปรแกรมคำนวนพื้นที่สี่เหลี่ยม
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
            direction={"column"}
          >
            <ImageList
              sx={{ width: "auto", height: "auto" }}
              cols={3}
              // rowHeight={164}
            >
              {data1.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    style={{ objectFit: "contain" }}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            paddingTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
            direction={"column"}
            sx={{ paddingLeft: "50px" }}
          >
            <Typography color={"black"} fontWeight={800}>
              - ผลงานสร้างคลิปวิดีโอเพื่อการเรียนการสอน เกี่ยวกับ code
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
            direction={"column"}
          >
            <ImageList
              sx={{ width: "auto", height: "auto" }}
              cols={3}
              // rowHeight={164}
            >
              {data2.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    style={{ objectFit: "contain" }}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            paddingTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
            direction={"column"}
            sx={{ paddingLeft: "50px" }}
          >
            <Typography color={"black"} fontWeight={800}>
              - ผลงานการใช้ Ai
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={"center"}
            alignContent={"center"}
            direction={"column"}
          >
            <ImageList
              sx={{ width: "auto", height: "auto" }}
              cols={3}
              // rowHeight={164}
            >
              {data3.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    style={{ objectFit: "contain" }}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
