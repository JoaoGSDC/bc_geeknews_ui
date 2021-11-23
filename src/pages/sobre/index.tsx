/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import React from 'react';
import { api } from '../../services/api';

import styles from './styles.module.scss';

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <h1>Sobre a Geek News</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus lacinia diam, vitae porttitor mi
          iaculis et. Nulla eleifend magna sit amet volutpat molestie. Sed aliquam lectus venenatis metus feugiat
          porttitor. Mauris tempor tincidunt auctor. Nunc turpis libero, sodales in egestas eu, ornare sit amet est.
          Nulla facilisi. Morbi elit libero, imperdiet nec suscipit ac, ultricies nec est. Nullam metus libero, iaculis
          non feugiat et, pellentesque et nulla. Proin iaculis turpis ac magna finibus convallis. Etiam in elementum
          libero. Morbi a augue id orci tincidunt sollicitudin eu sed nisi. Donec non ligula felis. Cras nec molestie
          massa, eget blandit augue. Aliquam erat volutpat. Aliquam erat volutpat. Nullam non tortor auctor, commodo est
          ut, scelerisque leo.
        </p>

        <p>
          Phasellus vehicula, elit eget efficitur placerat, orci diam porttitor enim, vel semper est lorem vel odio. Sed
          tincidunt quis dui a tempor. Aenean eget velit sollicitudin, volutpat orci sed, dignissim justo. Curabitur nec
          lectus malesuada, suscipit velit eget, malesuada ex. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Aliquam dapibus urna quis lacinia feugiat. Praesent sodales posuere
          massa id aliquet. Aenean ex eros, bibendum vitae convallis et, vestibulum vitae quam. In eu accumsan enim.
          Donec sed ornare neque. Praesent auctor, purus at ullamcorper laoreet, leo justo lobortis dui, eu commodo
          justo felis eget arcu. Aenean condimentum ante ut dolor ultrices scelerisque. Fusce et arcu sollicitudin,
          scelerisque lorem id, vulputate massa. Mauris ipsum lectus, dignissim quis leo facilisis, hendrerit pharetra
          nibh. Aenean tempor eros ac odio dignissim, sed placerat urna consectetur.
        </p>

        <p>
          Integer vitae cursus nisl. Fusce vel lacus nibh. In porttitor non neque a fringilla. Aliquam porttitor risus
          eros, at convallis sem sodales auctor. Nullam quis eros non erat vestibulum lacinia. Vivamus id tempor nibh.
          Nam tempus commodo elit vel scelerisque. Praesent eu tellus ullamcorper, accumsan diam a, tristique lorem.
          Pellentesque in augue id eros elementum consequat. Vivamus nisl sem, pellentesque in semper non, rhoncus ac
          mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dignissim justo, in pretium odio.
          Proin sodales efficitur auctor. Mauris ligula eros, rutrum sit amet augue quis, sodales ultrices velit.
        </p>

        <p>
          Nullam vel diam nec metus vulputate pretium vel sed nunc. Phasellus mollis augue magna, eu rhoncus velit
          imperdiet id. Integer in sapien aliquam, dapibus ligula et, congue nisi. Cras porta ullamcorper tortor. Nunc
          sit amet imperdiet enim. Cras dui dui, ultricies ac congue eget, luctus quis erat. Nulla nec ultricies erat.
          Phasellus non mollis turpis. Vivamus laoreet nunc non ultrices accumsan. Aliquam sit amet nibh non est
          placerat ullamcorper.
        </p>

        <p>
          In pretium iaculis mollis. Morbi tincidunt, nunc nec tincidunt mattis, nisl quam finibus urna, vitae rhoncus
          leo libero aliquet nisi. Vivamus feugiat hendrerit metus eu maximus. Aenean sit amet nibh felis. Praesent
          ultrices velit nisl, quis malesuada dolor pretium vel. Morbi bibendum nibh lacus, ac posuere massa interdum
          at. Proin pulvinar turpis in magna vehicula tincidunt. Vestibulum ultrices metus nec purus interdum, eget
          laoreet sem aliquam. Vestibulum pretium commodo purus in faucibus.
        </p>

        <p>
          Aliquam consequat nunc quis libero porttitor interdum. Etiam eleifend pulvinar elit in vestibulum. Nam
          porttitor, sem vitae tristique ultrices, turpis est rutrum felis, vehicula placerat ante magna eget sapien.
          Praesent consectetur velit felis, sit amet lacinia augue aliquet et. Mauris finibus nisi suscipit, ultrices
          turpis id, facilisis nisl. Pellentesque at enim lacus. Duis vel lacus ac nibh dignissim iaculis sit amet
          molestie quam.
        </p>

        <p>
          Curabitur scelerisque sed nibh vel eleifend. Duis nec lectus sit amet odio malesuada vulputate. Nullam et
          risus a orci maximus congue sed in dolor. Pellentesque sodales fermentum accumsan. Suspendisse mattis posuere
          dui id faucibus. Praesent ac maximus felis. Pellentesque vitae ullamcorper mi. Mauris commodo ac leo at
          imperdiet. Maecenas nibh quam, viverra vitae lectus et, finibus fringilla mauris. Suspendisse imperdiet nisi
          purus, ut ultrices justo dapibus at. Nulla facilisi. Integer quis erat volutpat nulla iaculis blandit. Aliquam
          justo libero, hendrerit vel tortor tristique, accumsan bibendum mi. Sed tortor metus, ullamcorper quis
          consectetur non, ornare id enim. Donec et ultricies augue. Fusce aliquet ac lectus sit amet suscipit.
        </p>

        <p>
          Suspendisse nec laoreet libero. Nullam nec tortor eget lorem pharetra volutpat non id turpis. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Morbi in felis vitae ex mollis sodales. Nullam bibendum sapien
          enim, at convallis ex feugiat ut. Praesent placerat nunc enim, nec sodales risus commodo nec. Nulla maximus
          gravida velit vel iaculis. Morbi luctus fringilla suscipit. Ut bibendum libero et odio viverra suscipit.
          Praesent malesuada mi quam, et vehicula sem pretium sed. Fusce auctor, nisi in bibendum mollis, augue turpis
          euismod tellus, at eleifend diam ante vitae ante. Quisque eu ultricies magna, sit amet efficitur leo. Praesent
          gravida pretium iaculis. Curabitur sit amet velit dictum, convallis diam at, varius lorem. Praesent at viverra
          eros. Phasellus ultrices dictum nisl vel tempus.
        </p>

        <p>
          Curabitur condimentum massa nec blandit rhoncus. Vivamus libero leo, semper non fringilla sit amet, facilisis
          ac nulla. Donec rutrum sapien sed sapien commodo cursus. Phasellus augue nunc, consequat accumsan feugiat a,
          vestibulum non felis. Etiam cursus leo nisl, in tempor dolor egestas ac. Ut vitae justo quam. Vestibulum
          ultrices accumsan laoreet. Donec ante tellus, elementum ac sem ut, vehicula fermentum lectus. Nulla ipsum
          augue, lobortis mattis nunc sed, porta ornare sem. Morbi ac efficitur dui, in scelerisque neque. Mauris
          egestas quam odio, et euismod eros faucibus aliquam. Quisque arcu ante, lobortis non turpis non, gravida
          blandit augue. Integer elementum pretium augue vel ullamcorper. Sed venenatis mi quis lacus euismod rhoncus.
        </p>

        <p>
          Maecenas rutrum lobortis ante quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Vivamus molestie massa et mollis convallis. Nulla interdum diam non massa vulputate,
          molestie congue felis auctor. Integer eu consequat augue. Proin porta arcu in elit lobortis pulvinar. Nullam
          at bibendum sapien. Praesent porta, lectus ac sollicitudin tincidunt, nulla elit sodales felis, eget dictum
          nibh nisl sit amet risus. Nunc vitae libero eros. Ut sed quam odio. Donec nisl felis, ultrices sed ex sed,
          feugiat tincidunt leo.
        </p>

        <p>
          Morbi ultricies a diam non ullamcorper. Duis lectus felis, suscipit ac porttitor ac, luctus ac lectus. Duis
          fermentum leo velit, eu rutrum purus mollis sed. Nulla congue.
        </p>
      </div>
    </>
  );
}
