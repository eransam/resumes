import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner5 from '../assets/img/banner/5.jpg'

const BlogSingleText = () => {
    return (
        <>
            <div className="blog-single-text vt-mb-50 vt-sm-mb-40">
                <div className="blog-single-img">
                    <img src={banner5} alt="banner5" />
                </div>
                <div className="blog-single-meta vt-mb-15">
                    <ul>
                        <li>
                            <i className="ri-user-line"></i>
                            <Link href="#">Sabbir Sahal</Link>
                        </li>
                        <li>
                            <i className="ri-calendar-2-line"></i>
                            25 April, 2023
                        </li>
                    </ul>
                </div>
                <p>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.</p>
                <p>New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                <blockquote>Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.</blockquote>
                <p>Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                <h3>Conduct replied off led whether?</h3>
                <ul className='disc-list'>
                    <li>Pretty merits waited six</li>
                    <li>General few civilly amiable pleased account carried.</li>
                    <li>Continue indulged speaking</li>
                    <li>Narrow formal length my highly</li>
                    <li>Occasional pianoforte alteration unaffected impossible</li>
                </ul>
                <p>Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.</p>
            </div>
        </>
    );
};

export default BlogSingleText;