import React from 'react';
import './Portfolio.css';
import imgfile from './jang.jpg'
import timeline from './timeline.png'

const Portfolio = () => {
  return (
      <div className="portfolio">
        <header>
          <h1>JB | 경험으로 일하는 개발자 </h1>
          <p><img src={imgfile} alt="Profile" className="profile-image"/></p>
          <p>안녕하세요! 백엔드 개발자 장병순입니다.</p>
        </header>
        <hr />
        <section className="about">
          <h2>🇰🇷 About Me</h2>
          <p>끊임없이 성장에 도전하기 위한 경험을 중요시 합니다.</p>
          <p>함께 성장하는 즐거움을 알기에 개발 크루를 운영중입니다.</p>
          <p>코더가 아닌 개발자가 되기 위해 문제해결 능력을 중요시 합니다.</p>
          <p>최근 테스트 코드와 코틀린에 대해 많은 관심을 가지고 있습니다.</p>
          <hr />
          <h2>🤙 Contact & Channel</h2>
          <p> Email ✉️ | byeongsoon94@kakao.com</p>
          <p> Phone 📱 | 010-9949-5594</p>
          <p> Github 💻 | <a href="https://github.com/byeongsoon">https://github.com/byeongsoon</a></p>
          <p> Blog 📝 | <a href="https://medium.com/@byeongsoon94">https://medium.com/@byeongsoon94</a></p>
          <p> Crew Github 😎 | <a href="https://github.com/develop-playground">https://github.com/develop-playground</a></p>
        </section>
        <hr />
        <section className="experience">
          <h2>👨🏻‍💻 Experience</h2>
          <p><h3>멋쟁이사자처럼 KDT Back-End School 멘토 - 2022.06.16. ~ 2023.07.14.</h3></p>
          <p>
            <ul>
              <li>멋쟁이사자처럼에서 진행하는 백엔드 개발자 양성교육</li>
              <li>5개월간 약 90~100명의 교육생을 돕는 멘토 역할 수행</li>
              <li>강의 중/후로 들어오는 교육생들의 질의응답 및 기술코칭</li>
              <li>해커톤, 개인 프로젝트 진행상황 체크 위클리 및 기술적 멘토링 진행</li>
              <li>프로젝트 심사기준, 우수 코드 선발기준 정립 및 평가</li>
            </ul>
          </p>
          <p><h3>DROP(기억을 지도에 담다) - 2022.09 ~ 2022.12.</h3></p>
          <p>
            <ul>
              <li>지도 위 나의 위치에 사진을 떨어뜨려(Drop) 추억을 간직하게 해주는 서비스</li>
              <li>Spring MVC 스택 기반의 API 서버 애플리케이션 개발</li>
              <li>역할 : 프로젝트 리드, 백엔드 팀원으로 API 개발 관련 내용 100% 수행</li>
              <li>사용 기술 : Java, Spring MVC, Spring Data JPA, MySQL, Docker, AWS EC2, AWS RDS, Feign Client</li>
            </ul>
          </p>
          <p><h3>이스트소프트 백엔드 Externship 1기 - 2022.04.20. ~ 2022.05.29.</h3></p>
          <p>
            <ul>
              <li>쇼핑몰 프로젝트를 구현하는 미션 중심형 온라인 인턴십</li>
              <li>50여명의 참가자 중 🏅최우수 수료생 선정🏅</li>
              <li>자기주도적 프로젝트 진행 및 주어진 과제 이외의 기능 추가</li>
              <li>동료 교육생과 그룹별 피어 리뷰, 이커머스 실무자와 1:1 코드 리뷰 경험</li>
              <li>사용 기술 : Java, Spring MVC, Spring Data JPA, MariaDB, Spring Security, Docker, AWS EC2, Feign Client, Thymeleaf</li>
            </ul>
          </p>
          <p><h3>Jeju Road(제주도 여행 서포트 서비스) - 2021.12. ~ 2022.08.</h3></p>
          <p>
            <ul>
              <li>개발자가 추천하는 지극히 주관적인 제주 맛집 추천 서비스</li>
              <li>Spring MVC 스택 기반의 API 서버 애플리케이션 개발</li>
              <li>역할 : 프로젝트 리드, 백엔드 팀원으로 API 개발 관련 내용 30% 수행</li>
              <li>사용 기술 : Java, Spring MVC, Spring Data JPA, PostgreSQL, Docker</li>
            </ul>
          </p>
          <p><h3>국방통합데이터센터 통합관제실 관제팀장 - 2019.07. ~ 2022.05.</h3></p>
          <p>
            <ul>
              <li>국방망, 인터넷에서 국방정보시스템의 무중단 운영을 위한 서버, 네트워크 장비 등 실시간 관제 및 장애 예방 - 장애 발생 시 원인식별 및 초기대응</li>
              <li>실시간 침해시도 관제 및 대응</li>
              <li>일일 관제작전 상황보고</li>
              <li>보고서 작성을 위한 데이터 정리 자동화 프로그램 개발 및 유지보수</li>
            </ul>
          </p>
          <p><h3>Hash Factory 인턴 - 2017.08.28. ~ 2017.11.30.</h3></p>
          <p>
            <ul>
              <li>SI 스타트업 인턴 경험</li>
              <li>웹 애플리케이션 개발</li>
              <li>지역 복지 기관의 외주를 받아 시각장애인을 위한 일상생활 서포트 서비스 개발</li>
              <li>타이어 쇼핑몰 개발</li>
            </ul>
          </p>
        </section>
        <hr />
        <section className="skills">
          <h2>🛠️ Skills</h2>
          <p><h3>Back-End</h3></p>
          <p>
            <ul>
              <li>Java, Kotlin</li>
              <li>Spring MVC, Spring Boot, Spring Data JPA, Spring Security</li>
              <li>MySQL, PostgreSQL, AWS RDS(Aurora)</li>
              <li>Gradle, JUnit5</li>
            </ul>
          </p>
          <p><h3>DevOps</h3></p>
          <p>
            <ul>
              <li>Docker, Github Actions</li>
              <li>AWS EC2, Linux</li>
              <li>Git(Github, GitLab)</li>
            </ul>
          </p>
          <p><h3>Tools</h3></p>
          <p>
            <ul>
              <li>IntelliJ, DataGrip, Postman, Sourcetree</li>
              <li>Slack, Discord, Notion, Zoom, Google Meet</li>
            </ul>
          </p>
        </section>
        <hr />
        <section className="education">
          <h2>🎓 Education</h2>
          <p>
            <ul>
              <li>한밭대학교 정보통신전문대학원 모바일융합공학과 - 2018.03. ~ 2022.02.</li>
              <li>한밭대학교 정보기술대학 정보통신공학과 - 2013.03. ~ 2018.02.</li>
            </ul>
          </p>
        </section>
        <hr />
        <section className="experience">
          <h2>🏅 Certificate</h2>
          <p>
            <ul>
              <li>정보처리기사 - 2018.11.16. 취득</li>
              <li>OCAJP(Oracle Certified Associate Java Programmer) - 2018.09.15. 취득</li>
            </ul>
          </p>
        </section>
        <hr />
        <section className="etc">
          <h2>📌 Etc.</h2>
          <img src={timeline} alt="Profile" className="timeline-image"/>
        </section>
      </div>
  );
};

export default Portfolio;
