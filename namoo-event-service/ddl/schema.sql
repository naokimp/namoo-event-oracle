-- 이벤트
DROP TABLE IF EXISTS event_tb RESTRICT;

-- 이벤트
CREATE TABLE event_tb (
	id          INTEGER       NOT NULL, -- 이벤트번호
	name        VARCHAR(50)   NOT NULL, -- 이름
	date        TIMESTAMP     NOT NULL, -- 일자
	subject     VARCHAR(50)   NOT NULL, -- 소개
	description VARCHAR(2000) NULL,     -- 상세설명
	lg_img_name VARCHAR(100)  NULL,     -- 큰이미지이름
	lg_img_type VARCHAR(50)   NULL,     -- 큰이미지타입
	sm_img_name VARCHAR(100)  NULL,     -- 작은이미지이름
	sm_img_type VARCHAR(50)   NULL      -- 작은이미지타입
);

-- 이벤트
ALTER TABLE event_tb
	ADD CONSTRAINT PK_event_tb -- 이벤트 기본키
		PRIMARY KEY (
			id -- 이벤트번호
		);

ALTER TABLE event_tb
	MODIFY COLUMN id INTEGER NOT NULL AUTO_INCREMENT;

ALTER TABLE event_tb
	AUTO_INCREMENT = 1;