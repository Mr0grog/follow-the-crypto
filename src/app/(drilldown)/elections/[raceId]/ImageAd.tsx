/* eslint-disable @next/next/no-img-element */

import { ImageAd as ImageAdType } from "@/app/types/Ads";
import { CommitteeConstant } from "@/app/types/Committee";
import { formatDateFromString } from "@/app/utils/utils";
import Link from "next/link";
import styles from "./page.module.css";

export default function ImageAd({
  ad,
  committees,
}: {
  ad: ImageAdType;
  committees: Record<string, CommitteeConstant>;
}) {
  return (
    <div className={styles.adGroup}>
      <h3 className="no-margin">
        <Link href={`/committees/${ad.committee_id}`}>
          {ad.committee_id in committees
            ? committees[ad.committee_id].name
            : ad.committee_id}
        </Link>
      </h3>
      <div>
        {(ad.humanDate || ad.date) && (
          <div>
            <b>Shown:</b> {ad.humanDate || formatDateFromString(ad.date)}
          </div>
        )}
        <div>
          <img
            className={styles.adImage}
            src={`https://storage.googleapis.com/follow-the-crypto-ads/${ad.src}`}
            alt={ad.alt || "Advertisement"}
          />
        </div>
        <div>
          {(ad.extraDetails || ad.coverage) && (
            <p>
              {ad.extraDetails && (
                <span dangerouslySetInnerHTML={{ __html: ad.extraDetails }} />
              )}{" "}
              {ad.coverage && ad.coverage.length && (
                <span>
                  News coverage:{" "}
                  {ad.coverage.map((source) => (
                    <a key={source.href} href={source.href}>
                      <i>{source.publisher}</i>
                    </a>
                  ))}
                </span>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
