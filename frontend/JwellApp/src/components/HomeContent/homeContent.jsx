import "./homeContent.css";

const HomeContent = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe
              width="100%"
              height="430"
              src="https://www.youtube.com/embed/8EPFqerB6qU?si=6y1DXVbZI-qmrYhn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1747560886/photo/blue-sapphire.jpg?s=1024x1024&w=is&k=20&c=sd5DcmFGk3goOxCsKJy-egAchZqaEr8Wa1DYUiEbEOE="
              className=" img1 d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1304598495/photo/beautiful-necklace-and-earrings-on-a-background-of-silk-womens-accessories.jpg?s=612x612&w=0&k=20&c=3o25AOrhvMg-wlpbVdH1aMi5YCvPOnlYlZFd4lJILj0="
              className=" img2 d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="bg-dark d-flex flex-row ">
        <div className="info-blog "></div>
        <div className="info-blogs ">
          <h1 className="mt-5"> GIFT LOVE, GIFT MANIMANJIRI</h1>
          <h3 className="mt-3">Your perfect jewellery gift awaits </h3>
          <button className="mt-3 but">Shop Now</button>
        </div>
      </div>
      <div className="cont-content">
        <div className="first-content">
          <img
            src="https://media.istockphoto.com/id/1446056509/photo/necklace.jpg?s=612x612&w=0&k=20&c=7eJ0k3fuClDRl6waDW0UIruoIyAGmBPEntcWknZk_d0="
            alt=""
          />
          <h4 className="text-white text-center mt-2">Floral Necklaces</h4>
        </div>
        <div className="sec-content">
          <img
            src="https://media.istockphoto.com/id/1331428097/photo/diamond-ring-in-jewelry-gift-box.jpg?s=612x612&w=0&k=20&c=Afk9mXNSLKsZ2V922GpCkbyj1bGKo6s1yOuSEFUz0PQ="
            alt=""
          />
          <h4 className="text-white text-center mt-2">Best of Manimanjiri</h4>
        </div>
        <div className="third-content">
          <img
            src="https://media.istockphoto.com/id/654392550/photo/engagement-rings-at-the-hands-of-the-newlyweds.jpg?s=612x612&w=0&k=20&c=GumBIPyk-QuZ-FvWY4xYGS6MOnQvWyWpHhLerQL9qFg="
            alt=""
          />
          <h4 className="text-white text-center mt-2">Stackable Accessories</h4>
        </div>
      </div>

      <div className="many-options "></div>
      <div className="its-options">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvAxpvsYaYgX2It_Gcl3uOC2dgzQno0PhFg&s"
            alt=""
            className="firstCircle"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9sGhJ9n-l7HscFnhCHTglZVYpYhy2-xzFzg&s"
            alt=""
             className="secondCircle"
          />
        </div>
        <div >
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUVGBcVFRcXFRUXFRcVFRUWFhcVFRUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFy0dHx8tLy0tLS0tLS0tKy0uLSstLS0tLS0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAD4QAAEDAgMFBAkCAwgDAAAAAAEAAhEDBBIhMQVBUWFxEyKBkQYyQlKhscHR8HLhFMLxFSMzQ1NikqIkgrL/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EACARAQEAAgMAAwEBAQAAAAAAAAABAhEDITESQVEiEwT/2gAMAwEAAhEDEQA/APMa1B3tZdfop2drMkHJKtrOMAkkK9ubdoaMBMOAnqoytnS2Ml7U/ZjPEXdABmUG4ccJEnknDQw5uMRlz1VfeV5n86K2PamXRQpqzpJVhkwFc2tGApzy1Djx3TVozNdFYtyVNZ010NmxcHJe3dhNRYW7E9TCXoBOsas1haQRw1CptTDApRS1emq+oFdubKRuKKjRKRaURiG+mQsY5QsfpBPUQq+g5WNuFeVSmadNGbSU6LUbCrMwC1Yxim4IrGKFlP8AxhaXNnQkJm2NN+TwCOapNtvwXBGmIB30+i3RuI3q857L2reGWdDbR9C6T+/b9w64fZP2SF7fMte49hBIjDHy4q/stoxkVZXdpRumYagB3g72ncQV04ZzLxz5YWdV42xjjWNWnSIY12KIjLkj7QvzixiSDGq6zaHo9Xo1MGIOpP8AaiD+k81Hb9jSp0cxLjkBzUWdVeXuOR/tQ+6sW5HurFi37VdW3phxIJMaCIPSUdhdGmXDlxSD68uy8PonrK1e4ktOIHXMeS2s/WEy/CN/bOgHUaExzBEqou6OnNejXmzSaOECXEYWDnECPFcVUtXYy14ILCRBGYIO8K8y0z+O6X2dZZyrcUtyJaUY+v55J+larmz5N104YaiVlQV3a00vaUFZ0qS57W4lMJliE1qK1QD0ym6STplNUiplVsHLEtcMTrEGuFZVUOUezTNVig1qqshSZCs7RyUY1OW7FJVrRRXJeimmhXZtU2I4YsYFMoOU9LdjdsQ9pLXNEAjrK4Kka1CqG1SYJyO5eu1hJXNekuxw9hyz1B5rPKNcb9FbWpkCriyrERu4cCue9GroPaWu9Zhwu+66emA6AdFfhnfrPm660uaVVr24XDquZ9LtjuwhzRiA+I+6t6ZgxOW48OR5K3YA5mF+/L912+uWXV28g/gXf6bvIrF6f/YA/wBQ+QWKn+Uaf638eEMgNLYz0/pwUrKu9r+7pi0I+nkj0LN7hLi2NxJ70TkMO9XFCwa7C6Q1zc+Rgg6FNnxdDsul3ml+btRwGWWSa296ONuB2rABVA/5gbnc+B8OmWdMl09Fbtqw4BXs3NM96u3nDbMtdBByyIgz0jrkrOlbLr9v7FFVvasHf9oD2gN/ULnLWnHd8td0Li5MbjdV2YZTKbiVGinabFunTR2MWelgsCwtTGBQcEog1MUilkekoSeplRqBaplEcFdQhUYoAJmo1DDVCW6bU7QpIFNqdohTEUzTYjNKECptU7VHaVslDaVKUAH+sFu4o4mlTDRO7Lzz3/nFGLclZLzd1v2F7rDagOW7EPwrq7Z0aKl9NqOEsqN1a4H4wVcWeYVePrLSeXvGVZ2jBIcd6bewxy3Hhy6KupOIkHdmra2dibJ04LulcQON3ulbRYZw+KxSPDLak95z+A5cfNdBsiya6oMUnDo3QTO8b0vsGyILiYwsJGeWY5RmrTZtGHl3P9vqs8Z9tc7rpc24gn8/NVhcS7oQhB/x1TLGb+a0ZLrZ1yDkUjtfYkk1aY5uaN41kc+S1aMOu5XLroNYHE8hz4hVyxmU1VscrjdxyVIZJhtNXlxstlVuOkIdqR73hxVYxkZER1XJlhcb26ZnMp0XLECorI00rXpqtiZSKLTWnMUmKml9nKCZwJSi5WNESrRSkqrEENVjWppMsSpiTGpmmgMCOxCjgorQgtKK0oqIsBWoWOy01OQUpSoiZPOPL90eMlGkyBCk4q0Q5n0upTSceGfkjbPBwNOkgeB4FF244YY4lo8yFeusBgDmjdmOP7q/HjvK1Xky1jIr3CRH4VuzrEAsUK7YU7BkyV1OZPs3cQsR8CxBwWyrQtZhOpkmfAz8Smrelh3dFbG3gzy0Sz2QZ/JSTSbd0FlPvR4Jyo2ABxhDp0sxOpPzTtxSOU7kQmHQwDei1qeKkCfZPwOSAG5c96cH+BUHT5hAlSquYZaU127Kh74wuPtDRV1FxRcGWarrfqZdGri3LDB36HcUpWYrPZz+1plh1bp9Psk6jFhnhqtsMtq19NBITlVqVqLGtYlTKsrUqrplXFgJURNEqjJKOarV9NBdRCtpWVXHJSY9MVKKFhUaTsWkJTlJiBbNTrGqZFaiGqNAS4u4SB9SpXLoHM5BTYIACsNkoFR6k8oRaoTIqNriXM/W35hdvaN7g6LkNp0/V/U35rs7Qd0dFtwzus+a9RR7VtSCTuPwPFJ2r8JXTXVIEQVzN1RwvI8ua3YGv4hYkZK2ghXbAKTtqUnEU/dsJIAUqdrhInwQKUrcl8nQI1aroIyB15o9d4OQMImx6WMODs5/MkAu6RlqjXsCjA1cQPLNCqWhYY3j8lSvM6bfEoKlozTOKELDmpikgsNjZ1Mt4HzQic4PExzj6oux2Fri7hmfBQum5ngc/PgsuX6acZWvRVdcUoVo1+6Z3A79N/NRqUZWF7bzpTMVxs16Vfb8kzaMgrPS9u4uQ1adSRKGiK9oW0nTG1X1GJZ9NP1EAhRYtErdkJhBYtVqkQNSTp++5J1Ee1FpxOncMh10KKVtlMDJogblshJDYRaptYpQolymQtJXompTbxdPkCV1Vr6oXHUKmO6A90E+JyXY2vqhbcflZcn03WXO7SZnO8LoK+ipbtsu6ZlaM1fidzWkzCxAMPOhiTkigdo0gesw6IF7LXDkVu2uIJ3FAndsMzv3+Ca2VcYSJT5YHeO9At7DWcoQW97TY5ocSBGpPBUde4a8nDoMgltuXsjADkNecKstbiEFgW5pqlTSjHSnqRyQOW7Ia48o+KXqtlOnKnPEj5JQrHk9a4eFH0eH51Qmuw66ZDonSFEtBWNjaVAUgRIWCjC12Rbm3TeN3kmGPDhI6Hqk79DFsUZ7kvSRXFXnSlBehFGchQoqYxpWUG4jiniI8f2QLhxkMGrvkNU3TECBoEnqanC0QpArcKyocJa7fAKccqfbVWGlRldQxm7oL0b71So/mB5T+y7agMlyfopQimD7xJPnHyC61uQWvFNYRny3edCuSqyq3KeOfhuVhXzgeJ6BJ3JyWjMhK0sWIHr+0DxI1VIWQYO5SpXtTTEtszzKB1tbDkFqtXLuiXIWmuQVm0WKpa+F0F9TkLnq9OCoosrK4zEq4YFy1F66SwrYmg7xkUlHSWFIOp4TvVVWYWktOo/JV3s7KmFG/su0EjJw+I4FVzx3F8MtVQkrAtvaQYIiNVppXO6BGlArU4OJv9UcLanSN6Qo1gUcOSVSlBkc0SlWBy3/AD6JL9Us+4YcUN5gKQelLmpicGDqeQU26RIJb0s8cmXR4DgmJQsS2Ck6B2uUpQGORAVKNJOK5v0gqbuK6Gqclzdx37hjeBk+Gf0VM/Nfq3H7v8dPsShhY0cAB5BXYOSRsWQ0J0Dd4nouuTTloWHKeP5CSuVZ1Aq25CBGFiksQVracIjGo2BawoNHRL1E01ArNQDc6Qqi6Zmujo7LOtV2AbhEvI/T7Pij/wAJQH+Vi5vcT/1EBRbEyWuIcyCrHZtzhPI6rqDRpb6FH/h+6BU2bbu/yyw8WOP/AMukfJV2n41e7NqNdSbB3JgLm7ahUod6m7tKYzMCHN/UzhzEq6sb5lTQjPcrSqt7Qsu0Et9YfHkVQlsLqgEjtOxxd9oz3jiOPVZ54b7jTDPXVUgKyVuForKNWOSV0ITjiqXalw4ubTaCS8xA1jeoyvXa2MtpijeTOEkw05k7xG7fr1U9mZjEdXZ6mSJ1E7uir6WHFgiGtdIIcDG5zXtnFJz1+G8lG5bHaMcMZDRLngNaxjYiNXTJ6Kutatae7kXS21RY6QDlnwMjwKkFoyEaFMKDSpSioVy+AqXYjMdd79wy8z+3xVltJ8NPRA9EqPcxe8S74x9Ek3nIm3WFdbRHd6Jii3LPU5n7IFNvwzP0CZaV0uZF6RrhPvCQuHQgW7PktI8j8CxAi9uSCWpp4QHBAFNyKUZf3pzz9gbsve+S1bANxVCJwDIcXn1R9fBVdKqS44iSSZniTqsuTPXTTjw32dNQnMmSth6ECtlZ7aDY1pzkIFSlTKJMqlpBBgjeFq4bimpS7rxm9o0cBq9o3HiPFDe6EC1rntQ4HNmY13yCPziny0i47i32Ztmcnq8p1Acwclxm1KIY+W5MeMbOU6t8DI8lOw2k5m/85raVjV5tayjvtGR9YcOaqyr2z2g2oIdv8ikL+z7MyM2nTlyJWeeH3GmGX1Vc5c9tyk5pFQEtLTORz5wulcfBJ3NtiCxym5pthl8btS2tcSajCXNe9rGNa1rQ0ujG6plikCTJyTdvXD24BiBdmx7YhpBLXtcDlHCM1Buxy09xzmSZMHVWNrZ4ZJJJOs9ANNNw8kx35Vsrj7B6QgAft8lNbAW4V2bGokqIC3CIVO3qkMKtdhUMFJvEACOJ/qqXbQLnMYPacB4aldNs/MdPn+yvxz+rVeS/zIs6DYHPf1RghU0ZbMUaiQuW6J5yWe2UC3ZraZ7Ic1iBGq1LlqdrNS7ggHeZUmN94ucfDuj6qjvHhpn4afFX+0aZwU3boI8cRXJ7fJjJcvP9urgm7IurVwLRmPDKOAhFhVjakBz2mcZEZw1oDW6ic8501yTTLwEAy0jPEZEjDkTh18uBUTos7MwsQXXTQJkRAOo0PDihOrzvmWlwYPXcBAy4ZmM1bciNVq5eXSGZxqZHdHEyjW1ENBEyZzPGcyWn3eCqrirTpta1tF9QVATVJcM2vgtAG4iTw+1xZvcWDFJPFwAcRGWKMp8lXGy3v1bKWTrxLaImg0n2KhH/AKvbPzb8VVMfGg81b3o/8d/66cf9lRBdGLmy9O0rkgzK6Cw2k17cD9D8FyqJRqZ6qyq/urcsdGo1B4hBIR7O4xt7N+71TwP2Q6jCDBGaxyx02xy2FCxSIUSqrNgLFqVhKDcrcqK1UdkpFa4zcNgThaT4mGj5ldLQbhaOXxJ1K5rY7sVeo7hDQeeZPzXUsZkI0/Mlpx+bZ8nujVByMSgUUYlaM0S7yUcMqRKzRBKFi0sQKvEpd7M0W3qSApVAggCDTwnTFB5Ys2nzB81QXtjJIcNMlfNAkg+q4QeXA9QYKWr0zBDvWZkf9zdzgs+TH5RfDLVc9X2eMMDwVLRpPZUIglrgWOA4O0PgYXYPYhfww1hc+XFLrTpw5rJd/atvsRIcwSSIOL1cORLQ3nGvIINqaz6suY1oDiWYCRga6QWRmC2Dp+C67NSayFa4bu9qzPU1pDsQcyjNC2iW1HG6NBq48BvK00y2hft/umN95xf4AYR/MqSpSXQ3neMxA0A4AaKurUVrJplVU9hQ2lWJpJWvRhSHKFbIHwPUb1bU6naN/wBzR5j7rm6NQjJWdvVIgjUKLNpl0achOKYuIIDxodRwPBJvK58urp0Y99pYlrEgOesxqu06MhyDdVYBWsap9vXkMInVLlqbJju6WXo1SkT7xLvM/YBdO5wAzKpNgUcNNg90AHwAlXdRkhdOE1jHPnd5WmLYyp1BvCFQEBGmVZVppWF0rHGEMFBKFi1CxBT7NryArVuYXK2dfCV0drVkIJELQcMg7dkHcAfZdxb8kUBCrsQK3VuWHkcwdxHIoEJxtUtyGY3g5jyWDszq0t/ScvIrO4fjSZ/pIrSdNCnxqeTfupAUxoyebjPwEBR8KfKFqFAuzGQGrjkB4/RMYwBhZpqSdXHieA4BL3VRztTkNBoB0A0WqL1eY6Ut2OQl6tNNBDqtVkEHU0GrRTxatFsoKStSjNGt3pq4pJINgoLexeCCw6H8BSly0tJB1ChQqwQU9fgOaHjdk76H6LPkx3NtOPLV0qnFQL1J+SWqPXM6BX14C5+4d2tZjOLhPSc/hKdvLiAk/R9mKuXe6CfE5fIlVvdkXn8y5O82Y3JWlNsKvsWwFZt0Xe4BMKiBC3KG925Bp7pKi0rTtVphQF7RYorEHHA6K7sKuQVEnrCruQdJSdK24SEpb1NE6woE3NQTkU1WalnBAQLCoUz80RyAb2JcCD1Te5Cc1BKk/Lp8kctkJVmSapGQgVe2FmFNVKchDaxApUaka9JWj2pas1BWxCsrFwcC0+0I+xSNViLaOzQK3DSCQdRkVX3D4Vxt5kODtzhPiMj9Fy99cLkznxrrw/opfVpyVx6K2/dLveMeDR9yVzNSpJXebBtsLGNjQCepzPxJVeCbz3+Lc91hr9X1qyE+EtREQjYl2uJuo6AlWuU3uUQEG6hhYzktObko0XEZID4uXyWLeNYg43eiW+oW1iC9oaJ+nuWLEGXCSfotrEEKe/r9Qj8VixBjNPzgUA/b5LFiCSJa/VaWIGXISxYghV1StRaWIE6v3+qHQ1WLEBfSD/CZ1/lXEbQWLFy8/rr4PCFPUdQvTbD881ixR/zfaP8Ap+lq3TyWXHquWLF1uUPcOimxYsQSP58EJu783rFiBhYsWIP/2Q=="
            alt=""
            className="thirdCircle"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8H3t02yzwAlqKV6vGdNWKyGH_d99NDvpr0w&s"
            alt=""
             className="fourthCircle"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAjxY6El14y7cmi_eFRQG58ltoEFTVTZ4GUi_aXiOPzbOopgP95aooGbMAFo2Jnk73A4&usqp=CAU"
            alt=""
             className="fifthCircle"
          />
        </div>
        
      </div>
      
    </>
  );
};

export default HomeContent;
